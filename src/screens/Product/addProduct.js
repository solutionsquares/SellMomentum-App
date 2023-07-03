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
import { ADD_PRODUCT_IMAGES, DOLLOR_SYMBOL } from '../../utils/svg'
// import ImagePicker from 'react-native-image-picker';
// import {ImagePicker, launchImageLibrary} from 'react-native-image-picker';
// var ImagePicker = require('react-native-image-picker');

// var ImagePicker = require('react-native-image-picker');
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

const theme = require('../../core/theme');
const AddProduct = ({ navigation }) => {
  const [filePath, setFilePath] = useState({});

  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [imageUri, setImageUri] = useState("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60");
  const [error, setError] = useState('');
  const dispatch = useDispatch()
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
  const categoriesList = categories && categories.map(({ name, sellerId }) => ({
    value: name,
    key: sellerId,
  }));

  useEffect(() => {
    reqPermission()
  })

  async function handleAddProduct() {
    validate()
    console.log(productName)
    console.log(categoryId);
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('inStock', inStock);
    formData.append('categoryId', categoryId);
    formData.append('productImage', imageUri)    // setApiLoader(true)
    console.log(formData)
    addProducts(formData).then(async (res) => {
      if (res) {
        console.log("res", res)
        try {
        } catch (error) {
          console.log("error", error)
        }

        setApiLoader(false)
        ToastMsg(constant.errorActionTypes.success, 'Success', 'OTP successfully send')
      } else {
        setApiLoader(false)
      }

    })


  }
  // const chooseFile = type => {
  //   const options = {
  //     noData: true,
  //   };
  //   ImagePicker.launchImageLibrary(options, (response) => {
  //     if (response.uri) {
  //       this.setState({ photo: response });
  //     }
  //   });
  //   // if (isReadGranted === 'denied') {
  //   //   reqPermission();
  //   // } else {
  //   //   let options = {
  //   //     mediaType: type,
  //   //     maxWidth: 300,
  //   //     maxHeight: 550,
  //   //     quality: 1,
  //   //   };
  //   //   ImagePicker.launchImageLibrary(options, response => {
  //   //         if (response.didCancel) {
  //   //           console.log('User cancelled image picker');
  //   //         } else if (response.error) {
  //   //           console.log('Image picker error:', response.error);
  //   //         } else {
  //   //           const uri = response.uri;
  //   //           setImageUri(uri);
  //   //         }
  //   //       });

  //   //   // launchImageLibrary(options, response => {
  //   //   //   //console.log('Response = ', response);
  //   //   //   if (response.assets) {
  //   //   //     setFilePath(response.assets[0]);
  //   //   //   } else if (response.didCancel) {
  //   //   //     setError('User cancelled image picker');
  //   //   //     setToast(true);
  //   //   //     return;
  //   //   //   } else if (response.errorCode === 'camera_unavailable') {
  //   //   //     setError('Camera not available on device');
  //   //   //     setToast(true);
  //   //   //     return;
  //   //   //   } else if (response.errorCode === 'permission') {
  //   //   //     setError('Permission not satisfied');
  //   //   //     setToast(true);
  //   //   //     return;
  //   //   //   } else if (response.errorCode === 'others') {
  //   //   //     setError(response.errorMessage);
  //   //   //     setToast(true);
  //   //   //     return;
  //   //   //   }
  //   //   //   // setFilePath(response);
  //   //   // });
  //   // }
  // };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

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
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(  {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    }, (response) => {
      console.log('Response = ', response);

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
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  // const openImagePicker = () => {
  // console.log("Temperrory disbled")
  //   // const options = {
  //   //   mediaType: 'photo',
  //   //   includeBase64: false,
  //   //   maxHeight: 200,
  //   //   maxWidth: 200,
  //   // };


  //   // ImagePicker.launchImageLibrary(options, response => {
  //   //   if (response.didCancel) {
  //   //     console.log('User cancelled image picker');
  //   //   } else if (response.error) {
  //   //     console.log('Image picker error:', response.error);
  //   //   } else {
  //   //     const uri = response.uri;
  //   //     setImageUri(uri);
  //   //   }
  //   // });
  // };

  const datas = [
    { id: 1, title: 'Product 1', price: '$10', image: require('../../assets/images/gs1.png') },
    { id: 2, title: 'Product 2', price: '$20', image: require('../../assets/images/gs2.png') },
    { id: 3, title: 'Product 3', price: '$30', image: require('../../assets/images/gs3.png') },
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
              data={datas}
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
                    source={item.image}
                    style={[styles.image, {
                      width: Math.floor(Dimensions.get('window').width - 50),
                      height: 108,
                      resizeMode: 'cover',
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
              setSelected={(val, key) => setCategoryId(val)}
              onSelect={(categoryId) => {
                console.log(categoryId)

              }}
              data={categoriesList}
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
            </View>
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
