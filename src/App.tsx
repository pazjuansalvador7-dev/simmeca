import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  Trophy,
  BrainCircuit,
  ArrowLeft,
  GraduationCap,
  Timer,
  AlertCircle
} from 'lucide-react';
import { generateExam, Question } from './services/geminiService';

type AppState = 'setup' | 'loading' | 'exam' | 'results';

export default function App() {
  const [state, setState] = useState<AppState>('setup');
  const [topic, setTopic] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds

  useEffect(() => {
    // Check for API key on mount safely
    const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || (window as any).process?.env?.GEMINI_API_KEY;
    if (!apiKey) {
      setError('Error: No se encontró la GEMINI_API_KEY. Si estás en Netlify, asegúrate de configurarla en las variables de entorno como VITE_GEMINI_API_KEY.');
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state === 'exam' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (state === 'exam' && timeLeft === 0) {
      handleSubmitExam();
    }
    return () => clearInterval(timer);
  }, [state, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = async () => {
    if (!topic.trim()) return;
    
    setState('loading');
    setError(null);
    setQuestions([]); // Clear previous questions
    
    const startTime = Date.now();
    
    try {
      const generatedQuestions = await generateExam(topic);
      
      // Ensure a minimum loading time of 1 second for smooth transitions
      const elapsedTime = Date.now() - startTime;
      const minLoadingTime = 1000;
      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
      }
      
      setQuestions(generatedQuestions);
      setUserAnswers({});
      setTimeLeft(1500); // Reset timer to 25 minutes
      setState('exam');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError('Hubo un error al generar el examen. Por favor, intenta de nuevo.');
      setState('setup');
    }
  };

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmitExam = () => {
    let currentScore = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setState('results');
  };

  const handleReset = () => {
    setState('setup');
    setTopic('');
    setQuestions([]);
    setUserAnswers({});
    setScore(0);
    setTimeLeft(1500);
  };

  const handleNewExamSameTopic = () => {
    handleStartExam();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {state === 'setup' && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-indigo-100 rounded-full">
                  <BrainCircuit className="w-12 h-12 text-indigo-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold font-display text-slate-900 tracking-tight">
                Generador Dinámico de Exámenes
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mx-auto">
                Pon a prueba tus conocimientos sobre cualquier tema. Generamos 20 preguntas únicas para ti.
              </p>
              
              <div className="glass-card p-8 space-y-6">
                <div className="text-left">
                  <label htmlFor="topic" className="block text-sm font-semibold text-slate-700 mb-2">
                    ¿Sobre qué tema quieres el examen?
                  </label>
                  <input
                    id="topic"
                    type="text"
                    placeholder="Ej: Historia de Roma, Física Cuántica, JavaScript..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleStartExam()}
                  />
                </div>
                
                {error && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleStartExam}
                  disabled={!topic.trim()}
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg"
                >
                  Empezar examen
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {state === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 space-y-6"
            >
              <Loader2 className="w-16 h-16 text-indigo-600 animate-spin" />
              <div className="text-center">
                <h2 className="text-2xl font-bold font-display text-slate-900">Preparando tu examen...</h2>
                <p className="text-slate-500 mt-2">Estamos seleccionando 20 preguntas desafiantes sobre "{topic}"</p>
              </div>
            </motion.div>
          )}

          {state === 'exam' && (
            <motion.div
              key="exam"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between sticky top-4 z-10 bg-slate-50/80 backdrop-blur-sm py-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <button onClick={handleReset} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-xl font-bold font-display truncate max-w-[200px] sm:max-w-md">
                    {topic}
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm text-sm font-bold ${
                    timeLeft < 60 ? 'bg-red-50 border-red-200 text-red-600 animate-pulse' : 'bg-white border-slate-200 text-slate-700'
                  }`}>
                    <Timer className="w-4 h-4" />
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-sm font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    {Object.keys(userAnswers).length} / {questions.length} respondidas
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {questions.map((q, index) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card p-6 space-y-4"
                  >
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-lg font-medium text-slate-800 leading-relaxed">
                        {q.text}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 ml-12">
                      {Object.entries(q.options).map(([key, value]) => (
                        <button
                          key={key}
                          onClick={() => handleAnswerSelect(q.id, key)}
                          className={`text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${
                            userAnswers[q.id] === key
                              ? 'bg-indigo-50 border-indigo-200 text-indigo-700 ring-1 ring-indigo-200'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                            userAnswers[q.id] === key ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {key}
                          </span>
                          {value}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 pb-12">
                <button
                  onClick={handleSubmitExam}
                  disabled={Object.keys(userAnswers).length < questions.length}
                  className="w-full btn-primary py-4 text-lg shadow-lg shadow-indigo-200"
                >
                  Finalizar y Calificar
                </button>
                {Object.keys(userAnswers).length < questions.length && (
                  <p className="text-center text-sm text-slate-500 mt-4 italic">
                    Responde todas las preguntas para enviar el examen.
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {state === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="glass-card p-10 text-center space-y-6">
                <div className="flex justify-center">
                  <div className={`p-6 rounded-full ${score >= 14 ? 'bg-emerald-100' : 'bg-amber-100'}`}>
                    <Trophy className={`w-16 h-16 ${score >= 14 ? 'text-emerald-600' : 'text-amber-600'}`} />
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold font-display text-slate-900">
                    {timeLeft === 0 ? '¡Tiempo Agotado!' : '¡Examen Completado!'}
                  </h2>
                  <p className="text-slate-500 mt-2">
                    {timeLeft === 0 
                      ? 'El tiempo de 25 minutos ha finalizado. Aquí están tus resultados.' 
                      : `Has terminado tu evaluación sobre "${topic}"`}
                  </p>
                </div>

                <div className="flex justify-center gap-8 py-4">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-indigo-600">{score}</p>
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">Correctas</p>
                  </div>
                  <div className="w-px bg-slate-200" />
                  <div className="text-center">
                    <p className="text-4xl font-bold text-slate-400">{questions.length - score}</p>
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">Incorrectas</p>
                  </div>
                  <div className="w-px bg-slate-200" />
                  <div className="text-center">
                    <p className="text-4xl font-bold text-slate-900">{Math.round((score / questions.length) * 100)}%</p>
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">Calificación</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button onClick={handleNewExamSameTopic} className="flex-1 btn-primary flex items-center justify-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Nuevo examen
                  </button>
                  <button onClick={handleReset} className="flex-1 btn-secondary flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Cambiar tema
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold font-display text-slate-800 px-2">Revisión de Respuestas</h3>
                {questions.map((q, index) => {
                  const isCorrect = userAnswers[q.id] === q.correctAnswer;
                  return (
                    <div key={q.id} className={`glass-card p-6 border-l-4 ${isCorrect ? 'border-l-emerald-500' : 'border-l-red-500'}`}>
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex gap-3">
                          <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {index + 1}
                          </span>
                          <p className="font-medium text-slate-800">{q.text}</p>
                        </div>
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        )}
                      </div>

                      <div className="mt-4 ml-9 space-y-2">
                        <div className="text-sm">
                          <span className="text-slate-500">Tu respuesta: </span>
                          <span className={`font-bold ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                            {userAnswers[q.id]} - {q.options[userAnswers[q.id] as keyof typeof q.options]}
                          </span>
                        </div>
                        {!isCorrect && (
                          <div className="text-sm">
                            <span className="text-slate-500">Respuesta correcta: </span>
                            <span className="font-bold text-emerald-600">
                              {q.correctAnswer} - {q.options[q.correctAnswer]}
                            </span>
                          </div>
                        )}
                        <div className="mt-3 p-3 bg-slate-50 rounded-lg text-sm text-slate-600 border border-slate-100">
                          <p className="font-semibold text-slate-700 mb-1">Explicación:</p>
                          {q.explanation}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="mt-auto pt-12 text-slate-400 text-sm flex items-center gap-2">
        <GraduationCap className="w-4 h-4" />
        <span>Generador Dinámico de Exámenes IA</span>
      </footer>
    </div>
  );
}
