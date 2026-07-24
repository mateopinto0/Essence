import "./Spinner.css";
export const Spinner = ({size=40, fullPage=false}) => {
    const spinner = (
        <div
            style={{
                width: size,
                height: size,
                border: `${size / 10}px solid rgba(46, 38, 32, 0.15)`,
                borderTopColor: "var(--color-acento)",
                borderRadius: "50%",
                animation: "girar 0.7s linear infinite",
            }}
        />
    );

    if (!fullPage) return spinner;

    return (
        <div className="spinner-container text-principal"
        >
            {spinner}
        </div>
    );
}