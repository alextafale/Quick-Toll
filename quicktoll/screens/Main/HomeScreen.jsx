import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export const HomeScreen = ({navigation}) => {
    const tollHistory = [
        { id: '1', name: 'Guadalajara-Morelia', date: '2023-10-15', time: '08:30 AM', amount: '$45.00 MXN', location: 'Km 23 Carretera México-Toluca' },
        { id: '2', name: 'Toluca-México', date: '2023-10-14', time: '07:15 PM', amount: '$35.50 MXN', location: 'Autopista México-Querétaro' },
        { id: '3', name: 'Periférico Norte', date: '2023-10-13', time: '02:45 PM', amount: '$28.75 MXN', location: 'Periférico Norte' },
        { id: '4', name: 'La Piedad-Guadalajara', date: '2023-10-12', time: '11:20 AM', amount: '$52.30 MXN', location: 'Autopista del Sol' },
        { id: '5', name: 'Circuito Exterior Mexiquense', date: '2023-10-11', time: '06:40 PM', amount: '$40.00 MXN', location: 'Circuito Exterior Mexiquense' },
    ];

    return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
          <ScrollView>
           
            <View style={styles.headerContainer}>
              <Text style={styles.subtitle}>Saldo disponible</Text>
              <Text style={styles.balance}>$1,250.00 MXN</Text>
              
              <TouchableOpacity style={styles.addBalanceButton} onPress={() => navigation.navigate('AddBalancesScreen')}>
                <Ionicons name="add-circle" size={20} color="#007AFF" />
                <Text style={styles.addBalanceText}>Agregar saldo</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.historyContainer}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Historial de Casetas</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>Ver todo</Text>
                </TouchableOpacity>
              </View>

              {tollHistory.map((toll) => (
                <View key={toll.id} style={styles.tollItem}>
                  <View style={styles.tollIconContainer}>
                    <FontAwesome5 name="road" size={20} color="#4A90E2" />
                  </View>
                  
                  <View style={styles.tollInfo}>
                    <Text style={styles.tollName}>{toll.name}</Text>
                    <Text style={styles.tollLocation}>{toll.location}</Text>
                    <Text style={styles.tollDate}>{toll.date} • {toll.time}</Text>
                  </View>
                  
                  <View style={styles.tollAmountContainer}>
                    <Text style={styles.tollAmount}>{toll.amount}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: '#4A90E2',
    padding: 20,
    paddingBottom: 25,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  addBalanceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  addBalanceText: {
    marginLeft: 8,
    color: '#007AFF',
    fontWeight: '600',
  },
  historyContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: -10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  tollItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tollIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e8f0fe',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  tollInfo: {
    flex: 1,
  },
  tollName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  tollLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  tollDate: {
    fontSize: 12,
    color: '#999',
  },
  tollAmountContainer: {
    alignItems: 'flex-end',
  },
  tollAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});

export default HomeScreen;