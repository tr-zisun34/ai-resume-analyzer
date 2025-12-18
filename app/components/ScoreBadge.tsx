import React from "react";

interface ScoreBadgeProps {
    score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    let label = "Needs Work";
    let badgeClasses = "bg-badge-red text-red-600";

    if (score > 70) {
        label = "Strong";
        badgeClasses = "bg-badge-green text-green-600";
    } else if (score > 49) {
        label = "Good Start";
        badgeClasses = "bg-yellow-100 text-yellow-600";
    }

    return (
        <div
            className={`px-3 py-1 rounded-full ${badgeClasses}`}
        >
            <p className="text-sm font-medium">{label}</p>
        </div>
    );
};

export default ScoreBadge;
