import { useState } from "react";
import { Field } from "../../../shared/ui/field";
import styles from "./SignUpForm.module.scss";

const initialFormState = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    agreeToRules: false,
};

function SignUpForm() {
    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.agreeToRules) {
            return;
        }

        console.log(formData);
    };

    return (
        <main className={styles.page}>
            <section className={styles.card} aria-labelledby="signup-title">
                <header className={styles.header}>
                    <p className={styles.eyebrow}>Create your account</p>
                    <h1 className={styles.title} id="signup-title">
                        Sign up
                    </h1>
                    <p className={styles.description}>
                        Fill in the details below to get started.
                    </p>
                </header>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <Field
                        id="name"
                        label="Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <Field
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Field
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Field
                        id="passwordConfirmation"
                        label="Password confirmation"
                        name="passwordConfirmation"
                        type="password"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                    />
                    <Field
                        id="agreeToRules"
                        label="I agree to the rules"
                        name="agreeToRules"
                        type="checkbox"
                        checked={formData.agreeToRules}
                        onChange={handleChange}
                    />
                    <button
                        className={styles.submit}
                        type="submit"
                        disabled={!formData.agreeToRules}
                    >
                        SignUp
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignUpForm;
