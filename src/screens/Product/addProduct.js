import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image

} from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import {launchImageLibrary} from 'react-native-image-picker';

import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/textInput'
// import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { addProducts } from '../../api/productApi'
// var ImagePicker = require('react-native-image-picker');

const theme = require('../../core/theme');
const AddProduct = ({ navigation }) => {
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
    if (Platform.OS === 'android') {
      isReadGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      console.log('isReadGranted', isReadGranted);
    }
  };


  const category = useSelector(state => state?.category?.entities?.undefined)


  const categories = category;
  const categoriesList = categories.map(({ name, sellerId }) => ({
    value: name,
    key: sellerId,
  }));

  useEffect(()=>{
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
        console.log("res",res)
        try {
        } catch (error) {
          console.log("error",error)
        }

        setApiLoader(false)
        ToastMsg(constant.errorActionTypes.success, 'Success', 'OTP successfully send')
      } else {
        setApiLoader(false)
      }

    })


  }
  const chooseFile = type => {
    // if (isReadGranted === 'denied') {
    //   reqPermission();
    // } else {
    //   let options = {
    //     mediaType: type,
    //     maxWidth: 300,
    //     maxHeight: 550,
    //     quality: 1,
    //   };
    //   ImagePicker.launchImageLibrary(options, response => {
    //         if (response.didCancel) {
    //           console.log('User cancelled image picker');
    //         } else if (response.error) {
    //           console.log('Image picker error:', response.error);
    //         } else {
    //           const uri = response.uri;
    //           setImageUri(uri);
    //         }
    //       });
      
    //   // launchImageLibrary(options, response => {
    //   //   //console.log('Response = ', response);
    //   //   if (response.assets) {
    //   //     setFilePath(response.assets[0]);
    //   //   } else if (response.didCancel) {
    //   //     setError('User cancelled image picker');
    //   //     setToast(true);
    //   //     return;
    //   //   } else if (response.errorCode === 'camera_unavailable') {
    //   //     setError('Camera not available on device');
    //   //     setToast(true);
    //   //     return;
    //   //   } else if (response.errorCode === 'permission') {
    //   //     setError('Permission not satisfied');
    //   //     setToast(true);
    //   //     return;
    //   //   } else if (response.errorCode === 'others') {
    //   //     setError(response.errorMessage);
    //   //     setToast(true);
    //   //     return;
    //   //   }
    //   //   // setFilePath(response);
    //   // });
    // }
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



  return (
    <>

      <View style={styles.container}>
        <StatusBar barStyle="light-content" style={[theme.primaryBGColor]} />
      <ScrollView>
        <View>
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
            placeholderTextColor={theme.secondaryColor}
            selectionColor={theme.secondaryColor}
            style={theme.inputDarkSquare}
          />

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
            maxLength={100}
            placeholderTextColor={theme.secondaryColor}
            selectionColor={theme.secondaryColor}
            style={theme.inputDarkSquare}
          />
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
            placeholderTextColor={theme.secondaryColor}
            selectionColor={theme.secondaryColor}
            style={theme.inputDarkSquare}
          />
          <Input
            label="Product Available Stock"
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
            placeholderTextColor={theme.secondaryColor}
            selectionColor={theme.secondaryColor}
            style={theme.inputDarkSquare}
          />

          <SelectList
            setSelected={(val, key) => setCategoryId(val)}
            onSelect={(categoryId) => {
              console.log(categoryId)

            }}
            data={categoriesList}
            save="value"
          />
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={{ width: 200, height: 200, marginLeft:'auto',marginRight:'auto'}}
            />
          )}
          <TouchableOpacity onPress={() => chooseFile()}>
            <View style={[styles.nextButton, theme.primaryBGColor]}>
              <Text style={theme.whiteText}>Upload Products Images</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAddProduct()}>
            <View style={[styles.nextButton, theme.primaryBGColor]}>
              <Text style={theme.whiteText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
        </ScrollView>

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



})

export default AddProduct
