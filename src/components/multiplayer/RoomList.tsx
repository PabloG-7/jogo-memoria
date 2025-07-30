import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GameRoom } from '@/types/multiplayer';
import { Users, Clock, ArrowLeft, Gamepad2, RefreshCw, Play } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface RoomListProps {
  rooms: GameRoom[];
  onJoinRoom: (roomId: string) => void;
  onBack: () => void;
  onRefresh: () => void;
  loading: boolean;
  playerName: string;
}

const RoomList: React.FC<RoomListProps> = ({
  rooms,
  onJoinRoom,
  onBack,
  onRefresh,
  loading,
  playerName
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Salas Disponíveis
            </h1>
          </div>
          <p className="text-muted-foreground">
            Olá, <span className="text-primary font-semibold">{playerName}</span>! 
            Escolha uma sala para entrar:
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <Button
            onClick={onRefresh}
            variant="outline"
            size="sm"
            disabled={loading}
            className="border-primary/30 hover:bg-primary/10"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
        </div>

        <div className="space-y-4">
          {rooms.length === 0 ? (
            <Card className="border-dashed border-primary/30 bg-card/50">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <Users className="w-12 h-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  Nenhuma sala disponível
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seja o primeiro a criar uma sala ou aguarde outros jogadores!
                </p>
              </CardContent>
            </Card>
          ) : (
            rooms.map((room) => (
              <Card 
                key={room.id} 
                className="border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 hover:border-primary/40"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Sala de {room.player1}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        Esperando
                      </Badge>
                      {room.code && (
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {room.code}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="flex items-center gap-2 text-xs">
                    <Clock className="w-3 h-3" />
                    Criada {formatDistanceToNow(new Date(room.updated_at), { 
                      addSuffix: true, 
                      locale: ptBR 
                    })}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Nível: {room.level}</span>
                      <span>• 1/2 jogadores</span>
                    </div>
                    
                    <Button
                      onClick={() => onJoinRoom(room.id)}
                      disabled={loading}
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Entrar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <Card className="border-primary/20 bg-card/60">
          <CardContent className="p-4">
            <Button
              onClick={onBack}
              variant="ghost"
              className="w-full text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoomList;