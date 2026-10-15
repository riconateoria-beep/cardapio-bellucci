# Cardápio Digital Bellucci

Cardápio digital da Bellucci (açaí, pizza no cone e sorvete tailandês) com painel administrativo. Site estático, sem build e sem `package.json`: HTML/CSS/JS puros, abrir `index.html` no navegador.

- Repositório: https://github.com/riconateoria-beep/cardapio-bellucci (branch `main`)
- Hospedagem: Vercel (`.vercel` está no `.gitignore`)

## Arquivos
- `index.html`: cardápio do cliente (combo builder por etapas, cupons, desconto, roleta no checkout, pedido via WhatsApp, Meta Pixel).
- `admin.html`: painel administrativo (dashboard, board de pedidos, produtos/categorias, cupons, clientes, pedido manual, exportar CSV, mensagens de WhatsApp, disparo em massa por fila manual, upload de imagem).
- `assets/supabase-client.js`: cliente do Supabase usado pelas duas páginas.

## Backend
- Supabase (banco e Storage de imagens de produto). As chaves ficam em `assets/supabase-client.js`; não há `.env`.
- WhatsApp de pedidos: número configurado em `index.html` e nas configurações (`SETTINGS.whatsapp_number`).

## Estado (15/10/2026)
- Cardápio integrado ao Supabase, painel admin funcionando.
- Roleta: pesos, cupom real, limite diário por cliente; sem promessa de prêmio garantido.
- Meta Pixel da Bellucci configurado em `index.html`.
- Último commit: `9af4c65` (Corrige ID do Meta Pixel).

## Como retomar em outro computador
```bash
git clone https://github.com/riconateoria-beep/cardapio-bellucci.git
git pull   # sempre antes de começar
```
Antes de sair do computador: commit e push. O histórico de conversas do Claude não acompanha; este arquivo é o contexto.
