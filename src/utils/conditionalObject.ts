type Condition<Base> = { condition: () => boolean; object: Partial<Base> };

/*  TODO: This function might be too slow and not support deep objects.
 It's hard to debug, more complex than necessary, and has performance overhead from multiple object spreads.
 It's also harder to be typesafe and have good DX.
 
The simpler approaches are:
 - Object spread 
const buttonProps = {
  ...baseButtonProps,
  ...(window.innerWidth < 768 && { className: 'btn btn-mobile' }),
  variant: 'secondary',
  ...(someAsyncOperation.isLoading && { disabled: true })
};

- computed properties (more readable)
const buttonProps = {
  ...baseButtonProps,
  className: window.innerWidth < 768 ? 'btn btn-mobile' : 'btn',
  variant: 'secondary',
  disabled: someAsyncOperation.isLoading
};
*/
export function createConditionalObject<T>(
  baseObject: T,
  conditions: Array<Condition<T>>
): T {
  return conditions.reduce((acc, condition) => {
    if (condition.condition()) {
      return { ...acc, ...condition.object };
    }
    return acc;
  }, baseObject);
}

interface ButtonProps {
  disabled: boolean;
  className: string;
  variant: "primary" | "secondary";
}

const baseButtonProps: ButtonProps = {
  disabled: false,
  className: "btn",
  variant: "primary",
};

const someAsyncOperation = {
  isLoading: false,
};

// Imitate window object
const window = {
  innerWidth: 560,
};

const buttonProps = createConditionalObject(baseButtonProps, [
  {
    condition: () => window.innerWidth < 768,
    object: { className: "btn btn-mobile" },
  },
  {
    condition: () => true,
    object: { variant: "secondary" },
  },
  {
    condition: () => someAsyncOperation.isLoading,
    object: { disabled: true },
  },
]);

console.log(buttonProps);
