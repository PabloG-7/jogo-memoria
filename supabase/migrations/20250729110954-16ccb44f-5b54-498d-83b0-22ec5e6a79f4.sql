-- Verificar e ajustar a estrutura da tabela game_rooms
-- A tabela já existe, mas vou garantir que tem todos os campos necessários

-- Adicionar realtime para a tabela
ALTER PUBLICATION supabase_realtime ADD TABLE public.game_rooms;

-- Configurar replica identity para melhor suporte ao realtime
ALTER TABLE public.game_rooms REPLICA IDENTITY FULL;

-- Verificar se a tabela tem estrutura correta (ela já parece ter os campos necessários)
-- Vou apenas ajustar o default do campo code para ser opcional
ALTER TABLE public.game_rooms ALTER COLUMN code DROP NOT NULL;