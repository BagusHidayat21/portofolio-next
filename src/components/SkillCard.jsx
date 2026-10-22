import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillCard({ nama, level }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-primary">{nama}</CardTitle>
        <Badge variant="outline">Level: {level}</Badge>
      </CardHeader>
    </Card>
  );
}
