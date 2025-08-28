import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router-dom";
import { BrainCircuit } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "O que é phishing?",
    options: [
      "Um tipo de vírus de computador",
      "Uma técnica de engenharia social para roubar informações",
      "Um programa antivírus",
      "Um tipo de firewall",
    ],
    correctAnswer: 1,
    explanation:
      "Phishing é uma técnica de engenharia social onde atacantes se passam por entidades confiáveis para roubar informações sensíveis.",
  },
  {
    id: 2,
    question: "Qual é o objetivo principal de um ataque de phishing?",
    options: [
      "Danificar o hardware do computador",
      "Roubar informações pessoais ou financeiras",
      "Melhorar a segurança do sistema",
      "Atualizar o software",
    ],
    correctAnswer: 1,
    explanation:
      "O objetivo principal do phishing é roubar informações pessoais ou financeiras dos usuários.",
  },
  {
    id: 3,
    question: "Como você pode identificar um email de phishing?",
    options: [
      "Sempre terá erros de gramática",
      "Sempre virá de um endereço desconhecido",
      "Pode ter erros de gramática, endereços suspeitos ou pedir informações sensíveis",
      "Sempre pedirá senhas",
    ],
    correctAnswer: 2,
    explanation:
      "Emails de phishing podem ter vários indicadores, incluindo erros de gramática, endereços suspeitos ou solicitações de informações sensíveis.",
  },
  {
    id: 4,
    question: "O que você deve fazer ao receber um email suspeito?",
    options: [
      "Responder imediatamente",
      "Clicar nos links para verificar",
      "Excluir o email sem abrir",
      "Verificar o remetente e não clicar em links suspeitos",
    ],
    correctAnswer: 3,
    explanation:
      "Ao receber um email suspeito, você deve verificar o remetente e evitar clicar em links ou baixar anexos.",
  },
  {
    id: 5,
    question: "Qual é a melhor prática ao criar senhas?",
    options: [
      "Usar a mesma senha em todos os sites",
      "Usar informações pessoais como data de nascimento",
      "Usar senhas fortes e únicas para cada serviço",
      "Compartilhar senhas com colegas de confiança",
    ],
    correctAnswer: 2,
    explanation:
      "A melhor prática é usar senhas fortes e únicas para cada serviço, evitando informações pessoais fáceis de adivinhar.",
  },
  {
    id: 6,
    question: "O que é autenticação de dois fatores (2FA)?",
    options: [
      "Ter duas senhas diferentes",
      "Usar dois dispositivos diferentes",
      "Um método de segurança que requer duas formas de verificação",
      "Ter duas contas de email",
    ],
    correctAnswer: 2,
    explanation:
      "2FA é um método de segurança que requer duas formas de verificação para acessar uma conta.",
  },
  {
    id: 7,
    question: "O que você deve fazer se suspeitar que foi vítima de phishing?",
    options: [
      "Ignorar e esperar que passe",
      "Mudar todas as senhas e notificar o departamento de TI",
      "Compartilhar com colegas para alertá-los",
      "Responder ao email suspeito",
    ],
    correctAnswer: 1,
    explanation:
      "Se suspeitar de phishing, você deve mudar todas as senhas e notificar o departamento de TI imediatamente.",
  },
  {
    id: 8,
    question: "Qual é o perigo de usar redes Wi-Fi públicas?",
    options: [
      "Nenhum perigo",
      "Podem ser monitoradas por atacantes",
      "São sempre mais lentas",
      "Podem danificar o dispositivo",
    ],
    correctAnswer: 1,
    explanation:
      "Redes Wi-Fi públicas podem ser monitoradas por atacantes, tornando importante evitar acessar informações sensíveis.",
  },
  {
    id: 9,
    question: "O que é um ataque de spear phishing?",
    options: [
      "Um ataque genérico a todos os usuários",
      "Um ataque direcionado a uma pessoa específica",
      "Um ataque que usa apenas emails",
      "Um ataque que usa apenas mensagens de texto",
    ],
    correctAnswer: 1,
    explanation:
      "Spear phishing é um ataque direcionado a uma pessoa específica, usando informações pessoais para parecer mais convincente.",
  },
  {
    id: 10,
    question:
      "Qual é a melhor maneira de verificar a autenticidade de um site?",
    options: [
      "Confiar no design do site",
      "Verificar o endereço URL e o certificado de segurança",
      "Verificar se tem muitos anúncios",
      "Verificar se tem muitas imagens",
    ],
    correctAnswer: 1,
    explanation:
      "A melhor maneira é verificar o endereço URL e o certificado de segurança do site (cadeado no navegador).",
  },
];

interface QuizProgress {
  currentQuestion: number;
  score: number;
  answers: number[];
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const saved = localStorage.getItem("quizProgress");
    if (saved) {
      const progress: QuizProgress = JSON.parse(saved);
      return progress.currentQuestion;
    }
    return 0;
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(() => {
    const saved = localStorage.getItem("quizProgress");
    if (saved) {
      const progress: QuizProgress = JSON.parse(saved);
      return progress.answers[progress.currentQuestion] ?? null;
    }
    return null;
  });

  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem("quizProgress");
    if (saved) {
      const progress: QuizProgress = JSON.parse(saved);
      return progress.score;
    }
    return 0;
  });

  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [triedToAdvance, setTriedToAdvance] = useState(false);
  const navigate = useNavigate();

  const saveProgress = (
    newQuestion: number,
    newScore: number,
    newAnswer: number | null
  ) => {
    const saved = localStorage.getItem("quizProgress");
    const progress: QuizProgress = saved
      ? JSON.parse(saved)
      : {
          currentQuestion: 0,
          score: 0,
          answers: new Array(questions.length).fill(null),
        };

    progress.currentQuestion = newQuestion;
    progress.score = newScore;
    if (newAnswer !== null) {
      progress.answers[newQuestion] = newAnswer;
    }

    localStorage.setItem("quizProgress", JSON.stringify(progress));
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setTriedToAdvance(false);
    saveProgress(currentQuestion, score, answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      setTriedToAdvance(true);
      return;
    }

    if (!showExplanation) {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        const newScore = score + 1;
        setScore(newScore);
        saveProgress(currentQuestion, newScore, selectedAnswer);
      }
      setShowExplanation(true);
      return;
    }

    if (currentQuestion < questions.length - 1) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTriedToAdvance(false);
      saveProgress(nextQuestion, score, null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setTriedToAdvance(false);
    localStorage.removeItem("quizProgress");
  };

  if (quizCompleted) {
    const percent = (score / questions.length) * 100;
    let colorClass = "text-red-500";
    if (percent >= 90) {
      colorClass = "text-green-500";
    } else if (percent >= 70) {
      colorClass = "text-yellow-500";
    }
    return (
      <div className="space-y-8 w-full h-full overflow-y-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              Resultado do Quiz
            </CardTitle>
            <CardDescription>
              Você completou o quiz de phishing!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={`text-2xl font-bold ${colorClass}`}>
              Pontuação: {score} de {questions.length}
            </div>
            <div className={colorClass}>
              {score === questions.length
                ? "Excelente! Você demonstrou um excelente conhecimento sobre phishing!"
                : percent >= 90
                ? "Muito bom! Você está muito bem preparado para identificar phishing."
                : percent >= 70
                ? "Bom trabalho! Você tem um bom conhecimento sobre phishing, mas pode melhorar."
                : "Continue aprendendo! Ainda há espaço para melhorar seu conhecimento sobre phishing."}
            </div>
            <div className="flex gap-4">
              <Button onClick={handleRestart}>Tentar Novamente</Button>
              <Button variant="outline" onClick={() => navigate("/home")}>
                Voltar para o início
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 w-full h-full overflow-y-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-primary" />
            Questão {currentQuestion + 1} de {questions.length}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg font-medium italic">
            {questions[currentQuestion].question}
          </div>
          <RadioGroup
            value={selectedAnswer?.toString()}
            onValueChange={(value) => handleAnswer(parseInt(value))}
            className="space-y-4"
          >
            {questions[currentQuestion].options?.map((option, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                  selectedAnswer === index
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                } ${
                  showExplanation
                    ? index === questions[currentQuestion].correctAnswer
                      ? "border-green-500 bg-green-500/5"
                      : selectedAnswer === index
                      ? "border-red-500 bg-red-500/5"
                      : ""
                    : ""
                }`}
                onClick={() => handleAnswer(index)}
              >
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  className="mr-3"
                />
                <Label
                  htmlFor={`option-${index}`}
                  className={`cursor-pointer flex-1 ${
                    showExplanation
                      ? index === questions[currentQuestion].correctAnswer
                        ? "text-green-500"
                        : selectedAnswer === index
                        ? "text-red-500"
                        : ""
                      : ""
                  }`}
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {triedToAdvance && selectedAnswer === null && (
            <div className="text-red-500 text-sm">
              Por favor, selecione uma resposta antes de avançar.
            </div>
          )}
          {showExplanation && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                {questions[currentQuestion].explanation}
              </p>
            </div>
          )}
          <div className="flex justify-end">
            <Button onClick={handleNext}>
              {!showExplanation
                ? "Verificar"
                : currentQuestion < questions.length - 1
                ? "Próxima"
                : "Finalizar"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
