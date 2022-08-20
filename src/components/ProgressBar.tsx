import '../styles/progressBar.scss';

interface DataProgressBar {
    value: number;
    max: number;
}

export function ProgressBar({ value, max }: DataProgressBar) {
    return (
        <div>
            <progress value={value} max={max} />
            <span>{value / max * 100}%</span>
        </div>
    );
}