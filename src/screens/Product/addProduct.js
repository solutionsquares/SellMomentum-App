import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  FlatList

} from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'

import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/textInput'
// import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { addProducts } from '../../api/productApi'
import { fetchUser, selectAll, genrateTokens} from '../../stores/user.reducer'
import { ADD_PRODUCT_IMAGES, DOLLOR_SYMBOL } from '../../utils/svg'
import { constant } from '../../constant/constant';
import { DialogMsgClose, DialogMsg, ToastMsg, ToastMsgClose } from '../../utils/notification'


// import RNFS from 'react-native-fs';
// import ImagePicker from 'react-native-image-picker';
// import {ImagePicker, launchImageLibrary} from 'react-native-image-picker';
// var ImagePicker = require('react-native-image-picker');

// var ImagePicker = require('react-native-image-picker');
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import RNFS from 'react-native-fs';

var fs = require('react-native-fs');


const theme = require('../../core/theme');
const AddProduct = ({ navigation }) => {
  const user = useSelector(state => state?.user?.entities?.undefined)
  const dispatch = useDispatch()



  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [offerPrice,setOfferPrice] =useState('')
  const [inStock, setInStock] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [selectedCategoryId,setSelectedCategoryId] = useState("")
  const [imageUri, setImageUri] = useState("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60");
  const [error, setError] = useState('');
  const [productsImages, setProductsImages] = useState([])
  const [filePath, setFilePath] = useState({});

console.log(user)
  console.log(user)

  let isReadGranted;
  const reqPermission = async () => {
    // if (Platform.OS === 'android') {
    //   isReadGranted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //   );
    //   console.log('isReadGranted', isReadGranted);
    // }
  };


  const category = useSelector(state => state?.category?.entities?.undefined)


  const categories = category;
  console.log('categories', categories);
  const categoriesList = categories && categories.map(({ name, sellerId,_id}) => ({
    value: name,
    key: sellerId,
    id: _id
  }));

  useEffect(() => {
    reqPermission()
  })
 function validate(){
  
    if (productName === "") {
      console.log("Please enter a product name.");
      return false;
    }
  
    // Validate description (should not be empty)
    if (description === "") {
      console.log("Please enter a description.");
      return false;
    }
  
    // Validate inStock (should be a positive number)
    if (isNaN(inStock) || inStock <= 0) {
      console.log("Please enter a valid quantity in stock.");
      return false;
    }
  
    // Validate selectedCategoryId (should not be empty)
    if (selectedCategoryId === "") {
      console.log("Please select a category.");
      return false;
    }
  
    // Validate imageUri (should be a valid URL)
    if (!isValidUrl(imageUri)) {
      console.log("Please enter a valid image URL.");
      return false;
    }
  
    // Validate price (should be a positive number)
    if (isNaN(price) || price <= 0) {
      console.log("Please enter a valid price.");
      return false;
    }
  
    // Validate offerPrice (should be a positive number and less than price)
    if (isNaN(offerPrice) || offerPrice <= 0 || offerPrice >= price) {
      console.log("Please enter a valid offer price.");
      return false;
    }
  
    // All validations passed
    return true;
  }
  function isValidUrl(url) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))" + // domain name or IP
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
  
    return pattern.test(url);
  }

  const readFile = async (filePath) => {
    try {
      const fileContent = await RNFS.readFile(filePath, 'utf8');
      console.log('File content:', fileContent);
    } catch (error) {
      console.error('Error reading file:', error);
    }
  };

  useEffect(() => {
    // readFile(filePath)
  },[filePath])

 useEffect(() => {

  for (let index = 0; index < categoriesList?.length; index++) {
    const element = categoriesList[index];
    if(element.value === categoryId){
      console.log(element)
      setSelectedCategoryId(element.id)
    }
  }
}, [categoryId])
  async function handleAddProduct() {
    
    validate()
    console.log(validate())
    if( validate() == true){
      const formData = new FormData();
      formData.append('name', productName);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('inStock', inStock);
      formData.append('categoryId', selectedCategoryId);
      // formData.append('product', fs.readFile(filePath, 'utf8'))    // setApiLoader(true)
      // formData.append('product', fs.readFile(filePath));
      formData.append('product', {
        name: filePath.fileName,
        type: filePath.type,
        uri:  filePath.uri,
      });
    
      console.log(formData)
    JSON.stringify(formData)
      addProducts(formData,user.token).then(async (res) => {
        if (res) {
          console.log("res", res)
          if(res.status == 200){
            ToastMsg(constant.errorActionTypes.success, 'Success', 'Your Product SuccessFully Add')
          }else if(res.status === 400){
            ToastMsg(constant.errorActionTypes.error, 'DANGER', res.message)
            if(res.message === "jwt expired"){
       
              // await dispatch(genrateTokens({"refreshToken":user.refreshToken})).then(async (res) => {
              //   if (res) {
              //     console.log("res", res)
          
              //   if(res.payload.status == 200){
              //     console.log(res)
              //   }else{
              //     ToastMsg(constant.errorActionTypes.error, 'Error', res.payload?.message)
              //   }
              //     // navigation.navigate('PhoneVerify', { screen: 'Home', confirm: response })
              //   } else {
              //     console.log("error")
              //     setApiLoader(false)
              //   }
          
              // }).catch(async error=>{
              //   console.log(error)
              //   // DialogMsg(constant.errorActionTypes.error, 'Error', 'Invalid password')
          
              // })
            }

          }
          try {
          } catch (error) {
            console.log("error", error)
          }

          // setApiLoader(false)
        } else {
          // setApiLoader(false)
        }

      })
    }


  }
  const onItemSelected = (item) => {
    console.log(item.id,'Usman')
    setSelectedItem(item.id);
  };
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    }, (response) => {
      console.log('Response = ', response.assets[0]);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setFilePath(response.assets[0]);
      productsImages.push({ image: response.assets[0].uri })
      console.log(productsImages)

    });
  };

 

  const datas = [
    { id: 1, title: 'Product 1', price: '$10', image: require('../../assets/images/gs1.png') },
  ];

  return (
    <>

      <View style={styles.container}>
        <StatusBar barStyle="light-content" style={[theme.primaryBGColor]} />

        <ScrollView>
          <View style={theme.rowView}>
            <TouchableOpacity onPress={() => chooseFile()}>
              <ADD_PRODUCT_IMAGES />
            </TouchableOpacity>
            <FlatList
              data={productsImages}
              style={{}}
              horizontal
              contentContainerStyle={{ padding: 5 }}
              showsHorizontalScrollIndicator={true}
              ItemSeparatorComponent={() => (
                <View style={{ backgroundColor: 'white', width: 20 }} />
              )}

              renderItem={({ item, index }) => (
                <TouchableOpacity
                  // onPress={() => { openLinkOrPage(index, 'seller')}}
                  style={{ flex: 1, position: 'relative' }}>
                  {/* <Image style={styles.image} source={item.image} ></Image> */}

                  <Image
                    source={{ uri: item.image }}
                    // source={item.image}
                    style={[styles.image, {
                      width: Math.floor(Dimensions.get('window').width - 50),
                      height: 108,
                      resizeMode: 'contain',
                    }]}
                  />
                  {/* Content Hide */}
                  {/* <View style={[styles.sliderContents,{}]}>
                      <Text style={[global.whiteColor,global.fontSize20,{}]}>Ready to deliver to your home</Text>
                    </View>  */}
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => item.image_url + index}
            />
          </View>
          <Text style={styles.productFont}>{'Max. 4 photos per product'}</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.productFont}>Product Name</Text>
            <Input
              label="Product Name"
              returnKeyType="next"
              value={productName}
              onChangeText={(text) => setProductName(text)}
              errorText={error}
              autoCapitalize="none"
              autoCompleteType="text"
              textContentType="text"
              keyboardType={'text'}
              maxLength={100}
              placeholderTextColor={theme.secondaryColor.color}
              selectionColor={theme.secondaryColor.color}
              style={theme.inputDarkSquare}
            />

            <Text style={styles.productFont}>Category Product</Text>
            <SelectList
              setSelected={(val) => setCategoryId(val)}
              data={categoriesList}
              onItemSelected={onItemSelected}

              save="value"
            />
            <View style={styles.priceInput}>
              <View style={styles.input}>
                <Text style={styles.productFont}>Price</Text>
                <View style={theme.rowView}>
                  <DOLLOR_SYMBOL style={styles.dollorSymbol} />
                  <Input
                    label="Product Price"
                    returnKeyType="next"
                    value={price}
                    onChangeText={(text) => setPrice(text)}
                    // error={!!email.error}
                    // errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="text"
                    textContentType="text"
                    keyboardType={'numeric'}
                    maxLength={100}
                    placeholderTextColor={theme.secondaryColor.color}
                    selectionColor={theme.secondaryColor.color}
                    style={theme.inputDarkSquare}
                  />
                </View>
              </View>
              <View style={styles.input}>
                <Text style={styles.productFont}>Offer Price</Text>
                <View style={theme.rowView}>
                  <DOLLOR_SYMBOL style={styles.dollorSymbol} />
                  <Input
                    label="Offer Price"
                    returnKeyType="next"
                    value={offerPrice}
                    onChangeText={(text) => setOfferPrice(text)}
                    // error={!!email.error}
                    // errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="text"
                    textContentType="text"
                    keyboardType={'numeric'}
                    maxLength={100}
                    placeholderTextColor={theme.secondaryColor.color}
                    selectionColor={theme.secondaryColor.color}
                    style={theme.inputDarkSquare}

                  />
                </View>
              </View>
            </View>
            <Text style={styles.productFont}>Product Stock</Text>
            <Input
              label="Available Products Stock"
              returnKeyType="next"
              value={inStock}
              onChangeText={(text) => setInStock(text)}
              // error={!!email.error}
              // errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="text"
              textContentType="text"
              keyboardType={'numeric'}
              maxLength={100}
              placeholderTextColor={theme.secondaryColor.color}
              selectionColor={theme.secondaryColor.color}
              style={theme.inputDarkSquare}
              multiline={true}
            />
            <Text style={styles.productFont}>Product Description</Text>
            <Input
              label="Product Description"
              returnKeyType="next"
              value={description}
              onChangeText={(text) => setDescription(text)}
              // error={!!email.error}
              // errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="text"
              textContentType="text"
              keyboardType={'text'}
              maxLength={200}
              placeholderTextColor={theme.secondaryColor.color}
              selectionColor={theme.secondaryColor.color}
              style={theme.inputDarkSquare}
              multiline={true}
            />
            <Text style={styles.productFont}>Additional Details</Text>

          </View>
        </ScrollView>
        <TouchableOpacity style={{}} onPress={() => handleAddProduct()}>
          <View style={[styles.nextButton, theme.primaryBGColor]}>
            <Text style={theme.whiteText}>Add Product</Text>
          </View>
        </TouchableOpacity>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  boldText: {
    fontWeight: "900"
  },
  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  allMargen: {
    margin: 20
  },
  productFont: {
    color: '#4F4F4F',
    fontSize: 14,
    opacity: 0.5
  },
  priceInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    padding: 10,
    marginRight: 10,
    width: '50%',
  },
  dollorSymbol: {
    marginBottom: 15,
    alignSelf: 'center'
  }




})

export default AddProduct
