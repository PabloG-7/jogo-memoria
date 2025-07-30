import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Plus, Play, ArrowLeft } from 'lucide-react';

interface MultiplayerEntryProps {
  onCreateRoom: (playerName: string) => void;
  onJoinRoom: (playerName: string) => void;
  onBack: () => void;
  loading: boolean;
}

const MultiplayerEntry: React.FC<MultiplayerEntryProps> = ({
  onCreateRoom,
  onJoinRoom,
  onBack,
  loading
}) => {
  const [playerName, setPlayerName] = useState('');

  const handleCreateRoom = () => {
    if (playerName.trim()) {
      onCreateRoom(playerName.trim());
    }
  };

  const handleJoinRoom = () => {
    if (playerName.trim()) {
      onJoinRoom(playerName.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Modo Multiplayer
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">
            Jogue Neon Memory com seus amigos online!
          </p>
        </div>

        <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-foreground">Digite seu nome</CardTitle>
            <CardDescription>
              Como você gostaria de ser chamado no jogo?
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <Input
              placeholder="Seu nome de jogador"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="text-center text-lg"
              maxLength={20}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && playerName.trim()) {
                  handleCreateRoom();
                }
              }}
            />

            <div className="space-y-3">
              <Button
                onClick={handleCreateRoom}
                disabled={!playerName.trim() || loading}
                className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                size="lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                Criar Nova Sala
              </Button>

              <Button
                onClick={handleJoinRoom}
                disabled={!playerName.trim() || loading}
                variant="outline"
                className="w-full text-lg py-6 border-primary/30 hover:bg-primary/10 transition-all duration-300"
                size="lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Entrar em Sala
              </Button>
            </div>

            <Button
              onClick={onBack}
              variant="ghost"
              className="w-full mt-6 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Menu
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            🎮 Desafie seus amigos em tempo real!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiplayerEntry;