import { StyleSheet, Text, View, TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const theme = require('../core/theme');

const SearchInput = ({ navigation }) => {
    return (
        <View style={[theme.primaryBGColor, {padding: 20, }]}>
            <View style={[styles.container,theme.whiteBGColor]}>
                <FontAwesome name="search" size={20} style={[theme.primaryColor,{ marginRight: 10 }]} />
                <TextInput
                    style={styles.serchInput}
                    placeholder="Search Product"
                    placeholderTextColor={theme.garyColor}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        margin: 0, 
        borderColor: '#ccc', 
        borderWidth: 1,
        borderRadius:25,
        paddingHorizontal:20,
    },
    searchInput:{ 
        flex: 1, 
        height: 40, 
    }
})
export default SearchInput