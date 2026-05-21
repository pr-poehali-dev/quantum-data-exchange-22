import { Badge } from "@/components/ui/badge"

const IMG_HERO = "https://cdn.poehali.dev/projects/6c8f7852-41fa-4a94-8a56-7ea15192cc25/files/6efec19d-c684-4d6a-97a0-18a5c0e26ee7.jpg"
const IMG_CROSSROADS = "https://cdn.poehali.dev/projects/6c8f7852-41fa-4a94-8a56-7ea15192cc25/files/9799668d-a2bd-408a-ab1f-c3db9b8c1a2c.jpg"
const IMG_PROFESSIONS = "https://cdn.poehali.dev/projects/6c8f7852-41fa-4a94-8a56-7ea15192cc25/files/c44890a5-9dc2-4376-8a6a-91c246ae8803.jpg"
const IMG_GROWTH = "https://cdn.poehali.dev/projects/6c8f7852-41fa-4a94-8a56-7ea15192cc25/files/53cccfca-2f76-47f1-987e-1c3446112608.jpg"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#a78bfa] border-[#7C3AED] bg-[#7C3AED]/10 text-sm px-4 py-1">Твой путь начинается здесь</Badge>,
    title: "Кем ты станешь завтра?",
    content: 'Мир профессий меняется быстрее, чем когда-либо. Узнай, куда движется будущее — и займи своё место в нём.',
    image: IMG_HERO,
    imagePosition: 'background' as const,
    showButton: true,
    buttonText: 'Исследовать профессии'
  },
  {
    id: 'about',
    title: 'Мир меняется быстро.',
    content: 'Профессии, которых ещё нет сегодня, станут самыми востребованными через 10 лет. Важно не угадать — важно научиться выбирать и адаптироваться.',
    image: IMG_CROSSROADS,
    imagePosition: 'right' as const,
  },
  {
    id: 'features',
    title: 'Профессии будущего',
    content: 'Новые специальности уже создают новую реальность. Вот кем становятся те, кто смотрит вперёд:',
    image: IMG_PROFESSIONS,
    imagePosition: 'background' as const,
    cards: [
      { icon: '🤖', title: 'Инженер ИИ', description: 'Создаёт и обучает нейросети' },
      { icon: '🧬', title: 'Биохакер', description: 'Улучшает человеческое тело и здоровье' },
      { icon: '🌆', title: 'Урбанист будущего', description: 'Проектирует устойчивые города' },
      { icon: '🎮', title: 'XR-дизайнер', description: 'Строит виртуальные миры' },
      { icon: '🌱', title: 'Эко-стратег', description: 'Создаёт зелёную экономику' },
      { icon: '🚀', title: 'Космический инженер', description: 'Делает космос доступным' },
    ]
  },
  {
    id: 'choice',
    title: 'Выбор — это навык.',
    content: 'Жизненный путь не задан заранее. Его строят те, кто умеет слышать себя, замечать тренды и не бояться пробовать новое.',
    image: IMG_GROWTH,
    imagePosition: 'right' as const,
  },
  {
    id: 'join',
    title: 'Начни строить себя.',
    content: 'Твоя профессия будущего ждёт тебя. Первый шаг — решиться исследовать возможности и сделать осознанный выбор.',
    showButton: true,
    buttonText: 'Начать путь'
  },
]
