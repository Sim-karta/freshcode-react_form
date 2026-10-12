function Field(props) {
    const { id, label, type, className, hasError, isValid, ...inputProps } = props;

    const inputClassName = [className].filter(Boolean).join(" ");

    if (type === "checkbox") {
        return (
            <label htmlFor={id}>
                <input
                    id={id}
                    type={type}
                    {...inputProps}
                    className={inputClassName}
                    aria-invalid={hasError || undefined}
                />
                {label}
            </label>
        );
    }

    return (
        <label htmlFor={id}>
            {label}
            <input
                id={id}
                type={type}
                {...inputProps}
                className={inputClassName}
                aria-invalid={hasError || undefined}
            />
        </label>
    );
}

export default Field;
