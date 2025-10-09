export const BadgeStatus = ({ className, text }) => {
    return (
        <span className="flex items-center gap-2">
            <span
                className={`w-3 h-3 rounded-full ${className}`}
            ></span>
            <span className="text-sm font-semibold">
                {text.toLocaleString().toUpperCase()}
            </span>
        </span>
    );
};
