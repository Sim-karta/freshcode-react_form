import { useState } from "react";
import { Field } from "../../../shared/ui/field";
import styles from "./SignUpForm.module.scss";

function SignUpForm() {
    const [agreeToRules, setAgreeToRules] = useState(false);

    const handleSubmit = (event) => {
        if (!agreeToRules) {
            event.preventDefault();
        }
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
                        checked={agreeToRules}
                        onChange={(event) =>
                            setAgreeToRules(event.target.checked)
                        }
                    />
                    <button
                        className={styles.submit}
                        type="submit"
                        disabled={!agreeToRules}
                    >
                        SignUp
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignUpForm;
