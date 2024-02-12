import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode
}

type ButtonTextProps = {
    children: ReactNode
}

type ButtonIconProps = {
    children: ReactNode
}

function Button({ children,...rest}: ButtonProps){
    return <TouchableOpacity 
        className="h-12 bg-green-800 rounded-md items-center justify-center flex-row" 
        activeOpacity={0.7}
        {...rest}
    >
        {children}
    </TouchableOpacity>
}

function ButtonText({ children }: ButtonTextProps){
    return <Text 
        className="text-white font-heading text-basemx-2">{children}</Text>
}

function ButtonIcon({ children }: ButtonIconProps){
   /*  return children */
   return <Text 
   className="text-white font-heading text-basemx-2">{children} </Text>
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
