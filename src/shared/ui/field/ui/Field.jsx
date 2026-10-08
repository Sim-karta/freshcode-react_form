function Field(props) {
    const { id, label, type, ...inputProps } = props;

    if (type === "checkbox") {
        return (
            <label htmlFor={id}>
                <input id={id} type={type} {...inputProps} />
                {label}
            </label>
        );
    }

    return (
        <label htmlFor={id}>
            {label}
            <input id={id} type={type} {...inputProps} />
        </label>
    );
}

export default Field;
