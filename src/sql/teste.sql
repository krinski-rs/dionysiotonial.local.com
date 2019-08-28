SELECT
                 	E1_NUM AS							'Número do título',
                 	RTRIM(E1_P_REF) AS						'Pedido Vogel',
                 	E1_NUMBOR AS							'Número do borderô',
                 	E1_PORTADO AS							'Portador(banco)',
                 	E1_PREFIXO AS							'Prefixo',
                 	Convert(varchar(10),cast(E1_BAIXA as date),103) AS		'Data da baixa(Protheus)',
                 	Convert(varchar(10),cast(E1_VENCORI as date),103) AS		'Data de vencimento da origem(Protheus)',
                 	Convert(varchar(10),cast(E1_VENCTO as date),103) AS 		'Data de vencimento(Protheus)',
                 	E1_DESCONT AS							'Desconto'
                 FROM  SE1V50 AS E1
                 WHERE E1_P_REF <> '';