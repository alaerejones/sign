import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white rounded-xl shadow-sm ${className}`}>
            {children}
        </div>
    );
};

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`p-8 ${className}`}>
            {children}
        </div>
    );
};