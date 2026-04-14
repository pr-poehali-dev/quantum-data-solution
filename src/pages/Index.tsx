import { useState } from "react";
import {
  Download,
  Shield,
  Zap,
  Eye,
  Clock,
  ArrowRight,
  Hash,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  MessageCircle,
  Smile,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const WALRUS_AVATAR = "https://cdn.poehali.dev/projects/3191a112-c0d9-4a0c-b138-4c35562342ed/files/6290932d-cdeb-4849-b1ec-04ca38a922dd.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a2a3a] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#142233] border-b border-[#0d1a27] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#20b2aa]">
              <img src={WALRUS_AVATAR} alt="МоржеMAX" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">МоржеMAX</h1>
              <p className="text-xs text-[#7ab8c8] hidden sm:block">Мессенджер для настоящих моржей</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#7ab8c8] hover:text-white hover:bg-[#1e3347]">
              <Icon name="Star" size={16} className="mr-2" />
              О нас
            </Button>
            <Button className="bg-[#20b2aa] hover:bg-[#178f88] text-white px-6 py-2 rounded text-sm font-medium">
              Скачать
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#7ab8c8] hover:text-white hover:bg-[#1e3347] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#0d1a27]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#7ab8c8] hover:text-white hover:bg-[#1e3347] justify-start">
                <Star className="w-4 h-4 mr-2" />
                О нас
              </Button>
              <Button className="bg-[#20b2aa] hover:bg-[#178f88] text-white px-6 py-2 rounded text-sm font-medium">
                Скачать
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле мессенджера */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#0d1a27] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 rounded-2xl hover:rounded-xl transition-all duration-200 overflow-hidden border-2 border-[#20b2aa] cursor-pointer">
            <img src={WALRUS_AVATAR} alt="МоржеMAX" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-[2px] bg-[#1a2a3a] rounded-full"></div>
          {["🌊", "🐋", "🦭", "❄️"].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#1a2a3a] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#20b2aa] text-xl"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#142233] flex flex-col`}
          >
            <div className="p-4 border-b border-[#0d1a27] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">Сервер МоржеMAX</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#7ab8c8] hover:text-white hover:bg-[#1e3347] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#7ab8c8] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Текстовые каналы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["общий", "новости", "моржи-онлайн", "помощь"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#7ab8c8] hover:text-[#dcddde] hover:bg-[#1e3347] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#7ab8c8] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Голосовые каналы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Льдина общая", "Арктический чат"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#7ab8c8] hover:text-[#dcddde] hover:bg-[#1e3347] cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Область пользователя */}
            <div className="p-2 bg-[#0d1a27] flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#20b2aa]">
                <img src={WALRUS_AVATAR} alt="Морж" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Морж_Максим</div>
                <div className="text-[#7ab8c8] text-xs truncate">#0001</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#1e3347]">
                  <Mic className="w-4 h-4 text-[#7ab8c8]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#1e3347]">
                  <Settings className="w-4 h-4 text-[#7ab8c8]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#1a2a3a] border-b border-[#0d1a27] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#7ab8c8] hover:text-[#dcddde] hover:bg-[#1e3347] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#7ab8c8]" />
              <span className="text-white font-semibold">моржи-онлайн</span>
              <div className="w-px h-6 bg-[#1e3347] mx-2 hidden sm:block"></div>
              <span className="text-[#7ab8c8] text-sm hidden sm:block">Общайся как настоящий морж!</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#7ab8c8] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#7ab8c8] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#7ab8c8] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения чата */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">

              {/* Приветственное сообщение бота */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#20b2aa]">
                  <img src={WALRUS_AVATAR} alt="МоржеMAX" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[#20b2aa] font-medium text-sm sm:text-base">МоржеMAX</span>
                    <span className="text-xs bg-[#20b2aa] text-white px-1 rounded text-[10px]">БОТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 10:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base mb-3">
                    <strong>Добро пожаловать в МоржеMAX!</strong> Общайся с командой быстро, удобно и по-моржиному.
                  </div>
                  <div className="bg-[#142233] border-l-4 border-[#20b2aa] p-3 sm:p-4 rounded">
                    <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет МоржеMAX:</h3>
                    <ul className="space-y-1 text-xs sm:text-sm text-[#7ab8c8]">
                      <li>🌊 Мгновенные сообщения и голосовые звонки</li>
                      <li>🦭 Каналы и группы для команд любого размера</li>
                      <li>❄️ Шифрование и защита данных</li>
                      <li>🐋 Стикеры и эмодзи в моржином стиле</li>
                      <li>⚡ Работает на всех платформах</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Сообщение пользователя 1 */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Маша_Полярная</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 10:05</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Наконец-то мессенджер, который понимает мою душу! 🦭
                  </div>

                  {/* Демо Rich Presence профиля */}
                  <div className="bg-[#142233] border border-[#0d1a27] rounded-lg overflow-hidden w-full max-w-sm">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-[#20b2aa] to-[#0077b6] relative">
                      <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#142233] overflow-hidden">
                          <img src={WALRUS_AVATAR} alt="Профиль" className="w-full h-full object-cover" />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#3ba55c] border-4 border-[#142233] rounded-full"></div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#1e3347] hover:bg-[#263f57] text-white text-xs px-2 sm:px-3 py-1 rounded"
                      >
                        <Settings className="w-3 h-3 mr-1" />
                        <span className="hidden sm:inline">Профиль</span>
                      </Button>
                    </div>

                    <div className="pt-4 sm:pt-6 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Маша</h3>
                        <div className="flex items-center gap-2 text-[#7ab8c8] text-xs sm:text-sm">
                          <span>masha_polar</span>
                          <span>-</span>
                          <span>🦭 Морж</span>
                        </div>
                      </div>

                      <div className="mb-3 sm:mb-4">
                        <div className="bg-[#1a2a3a] rounded-lg p-2 sm:p-3">
                          <div className="flex items-center gap-2 text-[#dcddde] text-xs sm:text-sm">
                            <span className="text-lg">🌊</span>
                            <span>Плыву навстречу новым чатам...</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex border-b border-[#1e3347] mb-3 sm:mb-4">
                        <button className="px-3 sm:px-4 py-2 text-[#7ab8c8] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                          Обо мне
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#20b2aa]">
                          Активность
                        </button>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-[#7ab8c8] text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                          <span>В сети</span>
                        </div>
                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#1a2a3a] rounded-lg">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 border border-[#20b2aa]">
                            <img src={WALRUS_AVATAR} alt="МоржеMAX" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-xs sm:text-sm mb-1">МоржеMAX</div>
                            <div className="text-[#dcddde] text-xs sm:text-sm mb-1">Чат: #моржи-онлайн</div>
                            <div className="text-[#7ab8c8] text-xs sm:text-sm mb-2">Арктический сервер</div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                              <span className="text-[#3ba55c] text-xs font-medium">В сети</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение пользователя 2 */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">В</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Вася_Ледяной</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 10:08</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    МоржеMAX — это как Discord, только круче и с моржами! ❄️🐋
                  </div>
                </div>
              </div>

              {/* Секция «Начало работы» */}
              <div className="bg-[#142233] border border-[#0d1a27] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 text-[#20b2aa]" />
                  Начни общаться с МоржеMAX
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#20b2aa] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Скачай приложение</h3>
                    <p className="text-[#7ab8c8] text-xs sm:text-sm">Windows, macOS, iOS и Android</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#20b2aa] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Создай аккаунт</h3>
                    <p className="text-[#7ab8c8] text-xs sm:text-sm">Регистрация за 30 секунд</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#20b2aa] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Плыви общаться!</h3>
                    <p className="text-[#7ab8c8] text-xs sm:text-sm">Зови друзей и создавай серверы</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#20b2aa] hover:bg-[#178f88] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Скачать МоржеMAX
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#1e3347] text-[#7ab8c8] hover:bg-[#1e3347] hover:border-[#20b2aa] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Открыть в браузере
                  </Button>
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-[#142233] border border-[#0d1a27] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему МоржеMAX?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Молниеносная скорость",
                      desc: "Сообщения доходят быстрее, чем морж ныряет",
                    },
                    {
                      icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Удобный интерфейс",
                      desc: "Интуитивно понятно даже моржу",
                    },
                    {
                      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Работает 24/7",
                      desc: "Доступен в любое время суток и в любую погоду",
                    },
                    {
                      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Полная безопасность",
                      desc: "Шифрование и защита личных данных",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#1a2a3a] transition-colors"
                    >
                      <div className="text-[#20b2aa] mt-0.5">{feature.icon}</div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#7ab8c8] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода сообщения */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#1e3347] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                <Smile className="w-5 h-5 text-[#7ab8c8]" />
                <div className="text-[#7ab8c8] text-xs sm:text-sm flex-1">Сообщение #моржи-онлайн</div>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#142233] p-4">
            <div className="mb-4">
              <h3 className="text-[#7ab8c8] text-xs font-semibold uppercase tracking-wide mb-2">В сети — 3</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Маша_Полярная",
                    status: "🌊 Чатится",
                    avatar: "М",
                    color: "from-teal-500 to-cyan-400",
                  },
                  { name: "Вася_Ледяной", status: "❄️ В сети", avatar: "В", color: "from-blue-500 to-indigo-500" },
                  { name: "Морж_Максим", status: "🦭 Разрабатывает МоржеMAX", avatar: "Мх", color: "from-cyan-500 to-teal-500" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#1a2a3a] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}
                    >
                      <span className="text-white text-xs font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#142233] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#7ab8c8] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
