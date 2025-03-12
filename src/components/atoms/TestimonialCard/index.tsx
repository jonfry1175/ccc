import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type TestimonialCardProps = {
  quote: string;
  name?: string;
  position?: string;
  company?: string;
  avatar?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  quoteIcon?: boolean;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  position,
  company,
  avatar,
  bgColor = "bg-white",
  borderColor = "border-gold/20",
  quoteIcon = true
}) => (
  <Card
    className={`${bgColor} border ${borderColor} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
  >
    <CardContent className="p-8 space-y-6 relative">
      {quoteIcon && (
        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <Quote className="w-12 h-12 text-gold rotate-180" />
        </div>
      )}

      <p className="text-color1 min-h-[120px] italic leading-relaxed relative z-10">
        &quot;{quote}&quot;
      </p>

      {(name || position || company || avatar) && (
        <div className="pt-6 flex items-center space-x-4 border-t border-gold/10">
          {avatar && (
            <div className="overflow-hidden rounded-full w-12 h-12 bg-gold/20 flex-shrink-0">
              <Image
                src={avatar}
                alt={name || "Avatar"}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div>
            {name && <h1 className="font-semibold text-color1">{name}</h1>}
            {position && <p className="text-sm text-color1">{position}</p>}
            {company && (
              <p className="text-xs text-color1 font-medium mt-1">{company}</p>
            )}
          </div>
        </div>
      )}
    </CardContent>
  </Card>
);
