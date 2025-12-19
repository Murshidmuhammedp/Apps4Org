import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import { showList1Only, showList2Only, showBoth, } from "./listSlice";

export default function ListCompare() {
    const dispatch = useDispatch<AppDispatch>();
    const { list1, list2, results } = useSelector(
        (state: RootState) => state.list
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-10">
            <h1 className="text-3xl font-bold text-center mb-12 text-slate-800">
                Country List Comparison
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

                <ListCard title="List 1" data={list1} />

                <ListCard title="List 2" data={list2} />

                <div className="flex flex-col justify-center gap-4">
                    <ActionButton
                        label="List1 Only"
                        onClick={() => dispatch(showList1Only())}
                    />
                    <ActionButton
                        label="List2 Only"
                        onClick={() => dispatch(showList2Only())}
                    />
                    <ActionButton
                        label="Both"
                        onClick={() => dispatch(showBoth())}
                    />
                </div>

                <ListCard title="Results" data={results} isResult />
            </div>
        </div>
    );
}

interface ListCardProps {
    title: string;
    data: string[];
    isResult?: boolean;
}

function ListCard({ title, data, isResult }: ListCardProps) {
    return (
        <div className="bg-slate-800 text-white rounded-xl shadow-lg p-6 min-h-[350px]">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>

            {data.length === 0 && isResult ? (
                <p className="text-slate-300 text-sm">
                    No data to display
                </p>
            ) : (
                <ul className="space-y-2">
                    {data.map((item) => (
                        <li
                            key={item}
                            className="bg-slate-700 rounded-md px-3 py-1 text-sm"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

interface ActionButtonProps {
    label: string;
    onClick: () => void;
}

function ActionButton({ label, onClick }: ActionButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold py-2 rounded-lg shadow"
        >
            {label}
        </button>
    );
}
