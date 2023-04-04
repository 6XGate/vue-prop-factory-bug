import type {PropOptions} from "vue";

export const useValidatableProps = <T> () => ({
    value: { } as PropOptions<T | undefined>
})

export const useValidatableComponentProps = <T> () => ({
    ...useValidatableProps<T>()
})

export const useInputProps = () => ({
    name: String,
    id: String
})

export const useInputComponentProps = <T> () => ({
    ...useValidatableComponentProps<T>(),
    ...useInputProps()
})

export const useTextFieldProps = () => ({
    disabled: Boolean,
    autofocus: Boolean
})

export const useTextFieldComponentProps = <T> () => ({
    ...useInputComponentProps<T>(),
    ...useTextFieldProps()
})
