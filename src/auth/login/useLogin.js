


// const useLogin = () => {
   


//       const signIn = async () => {
//         try {
//           await GoogleSignin.hasPlayServices();
//           const userInfo = await GoogleSignin.signIn();
//           setUserLoginInfo(userInfo);
//         } catch (error) {
//           if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//             // user cancelled the login flow
//           } else if (error.code === statusCodes.IN_PROGRESS) {
//             // operation (e.g. sign in) is in progress already
//           } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//             // play services not available or outdated
//           } else {
//             // some other error happened
//           }
//         }
    
//         navigate.navigate('MyTabs');
//       };
//   return {
//     userLoginInfo,setUserLoginInfo,formData,setFormData,fromFieldErr,setFormFieldErr, signIn
//   }
// }

// export default useLogin