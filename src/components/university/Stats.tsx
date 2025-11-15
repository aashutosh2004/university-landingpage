interface StatsProps {
  stats: {
    students: string;
    placement: string;
    courses: string;
    faculty: string;
  };
}

export const Stats = ({ stats }: StatsProps) => {
  const statItems = [
    { label: "Students", value: stats.students },
    { label: "Placement Rate", value: stats.placement },
    { label: "Programs", value: stats.courses },
    { label: "Expert Faculty", value: stats.faculty }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statItems.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-stats mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
