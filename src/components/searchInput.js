import { StyleSheet, Text, View, TextInput } from 'react-native'
import { theme } from '../core/theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchInput = ({ navigation }) => {
    return (
        <View style={{ padding: 20, backgroundColor: theme.colors.primary }}>
            <View style={styles.container}>
                <FontAwesome name="search" size={20} color={theme.colors.primary} style={{ marginRight: 10 }} />
                <TextInput
                    style={styles.serchInput}
                    placeholder="Search Product"
                    placeholderTextColor={theme.colors.gray}
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
        backgroundColor:theme.colors.white
    },
    searchInput:{ 
        flex: 1, 
        height: 40, 
    }
})
export default SearchInput