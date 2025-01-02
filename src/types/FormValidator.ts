export type Value = string | number | boolean | null | undefined;

export type ValuesBase = Record<string | number, any>;

export type ValidatorFn<Value> = (value: Value) => boolean;

export type ValidatorsSetup<Values extends ValuesBase> = {
  [Key in keyof Values]?: ValidatorFn<Values[Key]>[];
};

type UserFormData = {
  username: string;
  password: string;
};

const useFormValidators: ValidatorsSetup<UserFormData> = {
  username: [(value) => value.length > 0, (value) => value.length < 20],
  password: [
    (value) => value.length > 8,
    (value) => value.length < 32,
    (value) => value.split("").includes("!"),
  ],
};

const formData: UserFormData = {
  username: "john",
  password: "password123!",
};
