import classNames from "classnames";
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

const PASSWORD_PATTERN =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*.]).{8,20}$/;
const EMAIL_PATTERN = /^.+@.+$/;

const validateField = (name, value, formData = {}) => {
    switch (name) {
        case "name":
            if (!value.trim()) return "Name is required";
            if (value.trim().length < 2)
                return "Name must contain at least 2 characters";
            return "";
        case "email":
            if (!value.trim()) return "Email is required";
            if (!EMAIL_PATTERN.test(value)) return "Enter a valid email";
            return "";
        case "password":
            if (!value) return "Password is required";
            if (!PASSWORD_PATTERN.test(value)) {
                return "Password must contain at least 8 characters, a letter and a number";
            }
            return "";
        case "passwordConfirmation":
            if (!value) return "Confirm your password";
            if (!PASSWORD_PATTERN.test(value)) {
                return "Password confirmation must match the password requirements";
            }
            if (value !== formData.password) return "Passwords do not match";
            return "";
        case "agreeToRules":
            return value ? "" : "You must accept the rules";
        default:
            return "";
    }
};

function SignUpForm() {
    const [formData, setFormData] = useState(initialFormState);
    const [touched, setTouched] = useState({});

    const errors = {
        name: validateField("name", formData.name),
        email: validateField("email", formData.email),
        password: validateField("password", formData.password),
        passwordConfirmation: validateField(
            "passwordConfirmation",
            formData.passwordConfirmation,
            formData,
        ),
        agreeToRules: validateField("agreeToRules", formData.agreeToRules),
    };

    const isFormValid = Object.values(errors).every((error) => !error);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleBlur = (event) => {
        setTouched((prev) => ({
            ...prev,
            [event.target.name]: true,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isFormValid) {
            setTouched({
                name: true,
                email: true,
                password: true,
                passwordConfirmation: true,
                agreeToRules: true,
            });
            return;
        }

        console.log(formData);
    };

    const getFieldClassName = (name) => {
        if (!touched[name]) return "";

        return classNames({
            [styles.invalid]: errors[name],
            [styles.valid]:
                !errors[name] &&
                (name === "agreeToRules"
                    ? formData.agreeToRules
                    : formData[name]),
        });
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

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <Field
                        id="name"
                        label="Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClassName("name")}
                    />
                    <Field
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClassName("email")}
                    />
                    <Field
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClassName("password")}
                    />
                    <Field
                        id="passwordConfirmation"
                        label="Password confirmation"
                        name="passwordConfirmation"
                        type="password"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClassName("passwordConfirmation")}
                    />
                    <Field
                        id="agreeToRules"
                        label="I agree to the rules"
                        name="agreeToRules"
                        type="checkbox"
                        checked={formData.agreeToRules}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClassName("agreeToRules")}
                    />
                    <button
                        className={styles.submit}
                        type="submit"
                        disabled={!isFormValid || !formData.agreeToRules}
                    >
                        SignUp
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignUpForm;
