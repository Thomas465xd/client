import { PropsWithChildren } from "react";

export default function ErrorMessage({ children } : PropsWithChildren) {
    return (
        <div className="text-center bg-red-200 border-red-500 border-l-4 text-white uppercase p-3 font-bold mt-4">
            {children}
        </div>
    )
}