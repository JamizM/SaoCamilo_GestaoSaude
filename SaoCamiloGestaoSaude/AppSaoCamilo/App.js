import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import { ModalLogin } from './src/assets/Components/modal';

export default function App() {
  const [modalLoginVisible, setModalLoginVisible] = useState(false);

  // function handleModalLogin(){
  //   setModalLoginVisible(true);
  // }

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo_sao_camilo.png")} style={styles.logo_sao_camilo}/>
      <Text styles={styles.tituloGestaoSaude}>YE-Gestão E Saúde</Text>

      <TouchableOpacity style={styles.btnProximo} onPress={"#"}> 
        <Text style={styles.txtBtnProximo}>Proximo</Text>
      </TouchableOpacity>

      <Text style={styles.txtConsulta}>Consulte seus exames médicos</Text>

      <Modal visible={modalLoginVisible}> 
        <ModalLogin/>
      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo_sao_camilo: {
    marginTop: 60,
    marginBottom: 60,
    width: 200,
    height: 200,
  },
  tituloGestaoSaude:{ //nao ta funcionando...
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtConsulta:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  btnProximo:{
    backgroundColor: '#991A1A',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  txtBtnProximo:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});