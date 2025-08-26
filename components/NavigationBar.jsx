import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
export default function NavigationBar(){
    return (
        <View style={StyleSheet.bar}>
            <MaterialIcons name="home" size={24} color="black" />
            
            <Feather name="search" size={24} color="black" />
            <Ionicons name="person" size={24} color="black" />
        </View>
    );
}