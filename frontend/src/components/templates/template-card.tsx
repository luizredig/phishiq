import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Textarea } from "../../components/ui/textarea";
import { Card } from "../../components/ui/card";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { AlertCircle, Eye } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

interface TemplateCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

export function TemplateCard({
  title,
  imageUrl,
  description,
}: TemplateCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 hover:border-primary/50">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-800/30 to-transparent z-10" />
          <div className="aspect-square w-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain bg-muted/50"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <div className="flex items-center gap-2 mb-2">
              <Badge
                variant="default"
                className="bg-primary text-white shadow-lg shadow-primary/20"
              >
                Template
              </Badge>
            </div>
            <h1 className="font-semibold text-lg text-white drop-shadow-lg">
              {title}
            </h1>
          </div>
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              variant="secondary"
              className="bg-primary hover:bg-primary/90 backdrop-blur-sm border shadow-lg"
            >
              <Eye className="h-4 w-4 text-white" />
            </Button>
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">{title}</DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden bg-muted/50 border">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>

          <Alert
            variant="default"
            className="flex items-center bg-primary/5 border-primary/20"
          >
            <AlertCircle className="h-4 w-4 stroke-primary" />
            <AlertDescription className="text-primary">
              Você não pode editar templates fornecidos pelo PhishIQ.
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Conteúdo do template
              </span>
            </div>
            <Textarea
              value={description}
              disabled
              className="w-full min-h-[150px] font-mono text-sm bg-muted/50 border-muted"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
