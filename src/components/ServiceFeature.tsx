import { ReactNode } from "react";

interface ServiceFeatureProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function ServiceFeature({ icon, title, description }: ServiceFeatureProps) {
    return (
        <div className="flex gap-4 items-start mb-8">
            <div className="text-emerald-400 w-8 h-8 flex-shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    );
}
