interface CardProps {
  title: string;
  value: number;
  color: string;
}

export default function DashboardCard({
  title,
  value,
  color,
}: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h2>

    </div>
  );
}