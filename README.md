# ProjetoFliperama
Repositório do Projeto Fliperama, desenvolvido por Levi Dos Santos Monteiro e Murilo Aldigueri Marino. Para auxiliar no manuseio do fliperama, o qual foi feito em uma placa Raspberry Pi 3 devido 
a enorme liberdade de softwares que a plataforma oferece, foi desenvolvido um site para prover informações e solucionar as principais dificuldades que podem ocorrer ao utilizá-lo. Sendo assim, 
além dessas já citadas informações, o site oferece uma lista das plataformas emuláveis no fliperama, junto com resumos breves sobre os consoles e suas produtoras. Tal site foi feito utilizando 
o apoio de diversas linguagens de programação, como HTML, JavaScript e CSS, com o apoio do software gerador de websites feito em Ruby chamado Jekyll, para produzir um site estático (sem fenômenos 
de entrada e saída de dados, a exemplo de cadastramento) o que, aliado ao fato do próprio GitHub ser o "host" dessa aplicação, torna esse método perfeito para uma apresentação de informações apenas.

Para acessar o site, clique no link: https://sb-uel.github.io/ProjetoFliperama/

Para a formação da Lista de Jogos do Fliperama, foi desenvolvido um código em Python que armazena cada nome dos arquivos ROM de cada um dos emuladores disponíveis e devolve um arquivo texto contendo 
os nomes desses arquivos, ou seja, os nomes dos jogos, como, também, os comandos de título (headings), texto e pulo de linha em html para uma maior facilitação da implementação em seu site. Porém, 
para plataformas como Dreamcast e Arcade, seus arquivos ROM possuem abreviações de seus nomes reais, sendo necessário a nomeação manual. Além disso, na plataforma Arcade, há a presença de arquivos bios 
das diversas máquinas emuladas e, por isso, a presença da condição if no final do código ser grande devido à grande quantidade de arquivos desse tipo. Sendo assim, o arquivo Python utilizado pode ser 
consultado a seguir:

```
# Catalogador em Python

# Por: Levi dos Santos Monteiro
#      Murilo Aldigueri Marino

  import os
  import re
  
  def remove_parentesis_and_extension(name_archive):
  	name_base, extension = os.path.splitext(name_archive)  # Obtém o nome do arquivo e a extensão
  	name_without_parentesis = name_base.split(' (')[0]  # Remove o conteúdo entre parênteses
  	return name_without_parentesis, extension

  def fix_common(game):
  	text_after_common = game[index_common + 2 :]
  	space_after_common = text_after_common.find(' ')
  	if space_after_common != -1:
  		prefix = text_after_common[: space_after_common + 1]
  		text_after_common_wit_prefix = text_after_common[space_after_common :]
  		game_modified = prefix + game[: index_common] + text_after_common_wit_prefix
  		return game_modified
  	else:
  		prefix = text_after_common + ' '
  		game_modified = prefix + game[: index_common]
  		return game_modified
  
  directory = os.listdir("//RETROPIE/roms")
  with open("lista.txt", "w") as arquivo:
  	for platform in directory:
  		if not "mame" in platform:
  			items = os.listdir(f'//RETROPIE/roms/{platform}')
  			sorted_items = sorted(items)
  			if len(sorted_items) != 0:
  				capitalized_platform = platform.capitalize()
  				arquivo.write(f"\nLista de Jogos de {capitalized_platform}\n\n")
  				for game in sorted_items:
  					game_modified, extension = remove_parentesis_and_extension(game)
  					index_common = game_modified.find(',')
  					if index_common != -1:
  						game_modified_final = fix_common(game_modified)
  						sorted_items[sorted_items.index(game)] = game_modified_final + extension
  					else:
  						pattern = re.compile(r'^\d+ - ')
  						game_modified_final = pattern.sub('', game_modified)
  						sorted_items[sorted_items.index(game)] = game_modified_final + extension
  				sorted_items2 = sorted(sorted_items)
  				for game in sorted_items2:
  					game_modified, extension = remove_parentesis_and_extension(game)
  					if extension != ".srm" and extension != ".eeprom" and extension != ".nvmem" and extension != ".nvmem2" and extension != ".rtc" and extension != ".state" and game_modified != "TEMP" and
game_modified != "ULUS10495" and game_modified != "+Start Reicast" and not "mame" in game_modified and game_modified != "doom" and game_modified != "duke3d" and game_modified != "mrboom" and game_modified
!= "quake" and game_modified != "wolf3d" and game_modified != "kinst" and game_modified != "fbneo" and not "neogeo" in game_modified and game_modified != "awbios" and game_modified != "crysbios" and not
"naomi" in game_modified and game_modified != "3dobios" and game_modified != "airlbios" and game_modified != "aleck64" and game_modified != "alg_bios" and game_modified != "allied" and game_modified !=
"ar_bios" and not "aristmk" in game_modified and game_modified != "atarisy1" and game_modified != "bubsys" and game_modified != "cdibios" and game_modified != "cedmag" and game_modified != "chihiro" and
not "coh100" in game_modified and not "coh300" in game_modified and game_modified != "cubo" and game_modified != "decocass" and not "f355" in game_modified and game_modified != "galgbios" and
game_modified != "gaplus" and game_modified != "gp_110" and game_modified != "gq863" and not "gts1" in game_modified and game_modified != "hikaru" and game_modified != "hng64" and game_modified !=
"hod2bios" and game_modified != "isgsm" and game_modified != "iteagle" and not "konamig" in game_modified and not "bios" in game_modified and game_modified != "kviper" and game_modified != "maxaflex" and
game_modified != "megaplay" and game_modified != "megatech" and game_modified != "neocd" and game_modified != "nss" and game_modified != "pgm" and game_modified != "playch10" and game_modified != "pyson"
and game_modified != "sammymdl" and game_modified != "segasp" and game_modified != "sfcbox" and game_modified != "shtzone" and game_modified != "skns" and game_modified != "su2000" and not "sys2" in
game_modified and game_modified != "sys573" and game_modified != "taitotz" and game_modified != "tourvis" and game_modified != "triforce":
  						arquivo.write(game_modified + ' <br />')
  						arquivo.write("\n")

```
