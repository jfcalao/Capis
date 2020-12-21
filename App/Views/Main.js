import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { MaterialIcons, AntDesign } from 'react-native-vector-icons';



import Card_Wallet from '../Components/Card_Wallet'

const Main = (props) => {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../Assets/FONDO-V1.png')}
                style={[styles.bg_img_View]}
                imageStyle={[styles.bg_img]}>

                <View style={styles.title_wallet}>
                    <Text style={[styles.title_wallet_txt, styles.white_txt]}>Principal  </Text>
                    <MaterialIcons name="expand-more" size={30} color="#fff" />
                </View>
                <View style={styles.total}>
                    <Text style={[styles.general_resume_txt, styles.white_txt]}>Resumen General</Text>
                    <Text style={[styles.money_txt, styles.white_txt]}>Te deben</Text>
                    <Text style={[styles.money_val, { color: '#9AE7AB' }]}>${props.deben_value}</Text>
                    <Text style={[styles.money_txt, styles.white_txt]}>Te debes</Text>
                    <Text style={[styles.money_val, , { color: '#EFB7BD' }]}>${props.debes_value}</Text>
                </View>
                <View style={styles.in_th_walet}>
                    <Text style={[styles.money_txt, styles.white_txt]}>En esta cartera</Text>
                    <Text style={[styles.money_val, { color: '#C2E2BE' }]}>$400.000</Text>
                </View>
                <View style={styles.info_money_group_buttons}>
                    <TouchableOpacity style={[styles.button_strech, { backgroundColor: '#28A745' }]}>
                        <AntDesign name="pluscircleo" size={15} color="#fff" />
                        <Text style={[styles.white_txt, styles.txt_btn]}>Entró</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button_strech, { backgroundColor: '#DC3545' }]}>
                        <AntDesign name="minuscircleo" size={15} color="#fff" />
                        <Text style={[styles.white_txt, styles.txt_btn]}>Salió</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={styles.list}>
                <Card_Wallet style={styles.list_item} type={true} value='120.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='140.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={true} value='1.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='70.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='1.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={true} value='120.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='140.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={true} value='1.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='70.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='1.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={true} value='120.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='140.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={true} value='1.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='70.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='1.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={true} value='120.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='140.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={true} value='1.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='70.000'></Card_Wallet>
                <Card_Wallet style={styles.list_item} type={false} value='1.000'></Card_Wallet>
            </View>

        </ScrollView>
    );
};
const styles = StyleSheet.create(
    {
        container: {
            display: 'flex',
            backgroundColor: '#EFEDED',
            flex: 1,
        },
        white_txt: {
            color: '#FDFBFB',
        },
        bg_img_View: {
            paddingTop: 34,
            paddingRight: 36,
            paddingLeft: 36,
            paddingBottom: 15,
        },
        bg_img: {
            resizeMode: 'cover',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,

        },

        title_wallet: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
        },
        title_wallet_txt: {
            fontSize: 16,
        },
        total: {
            paddingLeft: 20
        },
        general_resume_txt: {
            fontSize: 12,
            marginTop: -5,
        },
        money_txt: {
            fontSize: 16,
            marginTop: 7,
        },
        money_val: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        in_th_walet: {
            marginTop: -5,
            paddingLeft: 20,
            display: 'flex',
            marginBottom: 18,
            alignItems: 'flex-end'
        },
        info_money_group_buttons: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        button_strech: {
            width: 95,
            height: 33,
            borderRadius: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        txt_btn: {
            marginLeft: 7,
        },
        list: {
            alignItems: 'center',
            paddingTop: 20,
        },
        list_item: {
            width: '85%',
            marginBottom: 10,
        },
    }
);
export default Main;