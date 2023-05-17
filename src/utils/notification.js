import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export function ToastMsg(type,title,textBody){
    return Toast.show({
        type: ALERT_TYPE[type],
        title: title,
        textBody: textBody,
      })
}

export function DialogMsg(type,title,textBody){
    return Dialog.show({
        type: ALERT_TYPE[type],
        title: title,
        textBody: textBody,
        button: 'close',
      })
}

export function DialogMsgClose(){
    return Dialog.hide()
}
export function ToastMsgClose(){
    return Toast.hide()
}