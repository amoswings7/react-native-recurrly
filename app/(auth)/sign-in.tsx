import {View, Text} from 'react-native'
import {Link} from "expo-router";

const SignIn = () => {
    return (
        <View>
            <Text>SignIn</Text>
            <Link href="/(auth)/sign-up">Create an Account</Link>
            <Link href={"/subscriptions/spotify"} className='mt-4 rounded bg-primary text-white p-4'>Spotify Subscriptions</Link>
        </View>
    )
}
export default SignIn
