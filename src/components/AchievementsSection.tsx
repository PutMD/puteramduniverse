import { TrendingDown, Clock, Database, Award } from "lucide-react";

const achievements = [
  {
    icon: TrendingDown,
    metric: "95%+",
    label: "Error Reduction",
    description: "Reduced document processing errors through streamlined validation algorithms",
  },
  {
    icon: Clock,
    metric: "30%",
    label: "Faster Resolution",
    description: "Reduced IT request resolution time through cross-functional collaboration",
  },
  {
    icon: Database,
    metric: "ETL",
    label: "Data Integration",
    description: "Built high-accuracy migration workflows across legacy systems with SQL Server and Cozyroc",
  },
  {
    icon: Award,
    metric: "2025",
    label: "BSc Computer Science",
    description: "Graduated from UiTM Jasin in September 2025",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-16 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {achievement.metric}
                </p>
                <p className="text-sm font-semibold text-primary mb-2">
                  {achievement.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
