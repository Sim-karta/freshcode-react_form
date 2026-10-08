import { Field } from "../../../shared/ui/field";

function SignUpForm() {
    return (
        <form>
            <Field id="name" label="Name" name="name" type="text" />
            <Field id="email" label="Email" name="email" type="email" />
            <Field
                id="password"
                label="Password"
                name="password"
                type="password"
            />
            <Field
                id="passwordConfirmation"
                label="Password confirmation"
                name="passwordConfirmation"
                type="password"
            />
            <Field
                id="agreeToRules"
                label="I agree to the rules"
                name="agreeToRules"
                type="checkbox"
                checked={false}
                readOnly
            />
            <button type="submit">SignUp</button>
        </form>
    );
}

export default SignUpForm;
