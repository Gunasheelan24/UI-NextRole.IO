import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { cn } from "cn";

interface IDashboardCard {
  id: number;
  title: string;
  description: string;
  type: string;
  value: number;
  backgroundColor: string;
  textColor: string;
}

const DashboardCard: React.FC<IDashboardCard> = ({
  id,
  title,
  value,
  description,
  type,
  backgroundColor,
  textColor,
}) => {
  return (
    <Card key={id} className={cn(`${textColor} ${backgroundColor}`)}>
      <CardHeader>
        <CardTitle>
          <h1 className="text-3xl text-primary">
            {value}
            {type == "percentage" ? "%" : ""}
          </h1>
        </CardTitle>
        <CardDescription className={`${textColor} text-xl`}>
          {title}
        </CardDescription>
      </CardHeader>

      <CardContent className="-mt-3">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
