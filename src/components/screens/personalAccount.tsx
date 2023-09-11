import { Link } from "expo-router";
import { useState } from "react";
import { Text, View, Keyboard, StyleSheet } from "react-native";

import AuthBtn from "@/components/common/Buttons/authBtn";
import Input from "@/components/common/Fieds/input";
import Loader from "@/components/common/Loader";
import { COLORS, FONT, SIZES } from "@/constants/theme";
import { useSession } from "@/contexts/auth";

const PersonalAccount = () => {
  const { session, isLoading, signIn } = useSession() ?? {
    session: null,
    isLoading: false,
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any | null>({});

  const handleErrors = (name: string, value: string) => {
    setErrors((prev: any) => ({ ...prev, [name]: value }));
  };

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      isValid = false;
      handleErrors("email", "Email is required");
    }

    if (!inputs.password) {
      isValid = false;
      handleErrors("password", "Password is required");
    }

    return isValid;
  };

  const handleOnChange = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <View style={style.container}>
      <Loader isLoading={isLoading} />
      <View style={style.formContainer}>
        <Text style={style.subTitle}>Sign in to continue</Text>
        <View style={style.inputContainer}>
          <Input
            placeHolder="Your email"
            error={errors.email}
            value={inputs.email}
            onChangeText={(text: string) => handleOnChange("email", text)}
            onFocus={() => handleErrors("email", "")}
          />
          <Input
            placeHolder="Your password"
            error={errors.password}
            value={inputs.password}
            password
            onChangeText={(text: string) => handleOnChange("password", text)}
            onFocus={() => handleErrors("password", "")}
          />
          <View style={style.forgotPasswordContainer}>
            <Text style={style.forgotPasswordText}>Forgot password?</Text>
            {/* <Text style={style.textUnderline} /> */}
          </View>
          <View style={style.buttonContainer}>
            <AuthBtn title="Sign in" onPress={() => {}} />
          </View>
          <View style={style.singUplink}>
            <Text style={{}}>Forgot password?</Text>
            <Link replace style={style.forgotPasswordText} href="/signin">
              Singin
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: SIZES.medium,
  },
  title: {
    fontSize: 30,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.small,
  },
  subTitle: {
    fontSize: 22,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.large,
  },
  inputContainer: {
    width: "100%",
    marginBottom: SIZES.small,
  },
  forgotPasswordContainer: {},
  forgotPasswordText: {
    fontSize: 15,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    width: "100%",
    marginTop: SIZES.large,
  },
  singUplink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.large,
  },
});

export default PersonalAccount;