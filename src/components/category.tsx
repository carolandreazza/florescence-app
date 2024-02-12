import { Text, Pressable, PressableProps } from "react-native";
import { clsx } from "clsx"

type CategoryProps = {
    title: string
    isSelected?: boolean
}

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
    return (
        <Pressable className={clsx(
            "bg-slate-800 px-4 justify-center rounded-md h-10",
            isSelected && "border-2 border-green-800"
            )} 
            {...rest}>
            <Text className="text-slate-900 font-subtitle text-sm">{title}</Text>
        </Pressable>
    )
}