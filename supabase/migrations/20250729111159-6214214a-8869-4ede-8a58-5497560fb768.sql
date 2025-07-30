-- Ajustar a estrutura da tabela para o multiplayer
ALTER TABLE public.game_rooms REPLICA IDENTITY FULL;

-- Tornar o campo code opcional
ALTER TABLE public.game_rooms ALTER COLUMN code DROP NOT NULL;