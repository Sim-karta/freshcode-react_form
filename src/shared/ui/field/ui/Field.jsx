function Field(props) {
    const { id, label, type, className, error, ...inputProps } = props;

    const inputClassName = [className].filter(Boolean).join(" ");
    const errorId = `${id}-error`;

    return (
        <div>
            <label htmlFor={id}>
                {type === "checkbox" && (
                    <>
                        <input
                            id={id}
                            type={type}
                            {...inputProps}
                            className={inputClassName}
                            aria-invalid={Boolean(error)}
                            aria-describedby={error ? errorId : undefined}
                        />
                        {label}
                    </>
                )}
                {type !== "checkbox" && (
                    <>
                        {label}
                        <input
                            id={id}
                            type={type}
                            {...inputProps}
                            className={inputClassName}
                            aria-invalid={Boolean(error)}
                            aria-describedby={error ? errorId : undefined}
                        />
                    </>
                )}
            </label>
            {error && (
                <span id={errorId} role="alert">
                    {error}
                </span>
            )}
        </div>
    );
}

export default Field;
