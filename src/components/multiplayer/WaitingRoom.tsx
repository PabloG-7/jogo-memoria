import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GameRoom } from '@/types/multiplayer';
import { Users, Copy, Clock, ArrowLeft, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WaitingRoomProps {
  room: GameRoom;
  playerName: string;
  isPlayer1: boolean;
  onBack: () => void;
}

const WaitingRoom: React.FC<WaitingRoomProps> = ({
  room,
  playerName,
  isPlayer1,
  onBack
}) => {
  const { toast } = useToast();

  const copyRoomCode = () => {
    if (room.code) {
      navigator.clipboard.writeText(room.code);
      toast({
        title: "Código copiado!",
        description: "O código da sala foi copiado para a área de transferência.",
        duration: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sala Criada!
            </h1>
          </div>
        </div>

        <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-foreground flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
              Aguardando jogador...
            </CardTitle>
            <CardDescription>
              Compartilhe o código abaixo com seu amigo
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {room.code && (
              <div className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">Código da Sala:</p>
                <div 
                  className="bg-primary/10 border border-primary/30 rounded-lg p-4 cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={copyRoomCode}
                >
                  <div className="text-3xl font-mono font-bold text-primary tracking-widest">
                    {room.code}
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Copy className="w-3 h-3" />
                    Clique para copiar
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <div className="bg-secondary/50 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-foreground mb-2">Jogadores na sala:</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      🎮 {room.player1}
                      {isPlayer1 && <span className="text-primary ml-1">(você)</span>}
                    </span>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                      Conectado
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      🎮 Aguardando...
                    </span>
                    <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                      Esperando
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-blue-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Status:</span>
                </div>
                <p className="text-sm text-blue-300 mt-1">
                  O jogo começará automaticamente quando outro jogador entrar na sala.
                </p>
              </div>
            </div>

            <Button
              onClick={onBack}
              variant="outline"
              className="w-full border-primary/30 hover:bg-primary/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Cancelar e Voltar
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            💡 Dica: Compartilhe o código <span className="text-primary font-mono">{room.code}</span> com seu amigo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitingRoom;