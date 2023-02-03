import { useState, useRef } from "react";
import { View, Text, ScrollView, useWindowDimensions } from "react-native";
import { ProgressBar } from "../../../components/ProgressBar";
import { styles } from "./styles";

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
};

export function Post() {
  const [percentage, setPercentage] = useState(0);

  const scrollRef = useRef<ScrollView>(null);

  const dimensions = useWindowDimensions();

  function ScrollPercentage({
    contentOffset,
    contentSize,
    layoutMeasurement,
  }: ScrollProps) {
    const visibleContent = Math.ceil(
      (dimensions.height / contentSize.height) * 100
    );

    const value =
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
    setPercentage(value < visibleContent ? 0 : value);
  }

  function handleOnMoveTop() {
    scrollRef.current?.scrollTo({
      y: 0,
      x: 0,
      animated: true,
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content} // propriedade para não deixar a listagem grudada no top.
        onScroll={(event) => ScrollPercentage(event.nativeEvent)} //
      >
        <Text style={styles.title}>Mussum Ipsum</Text>
        <View>
          <Text style={styles.text}>
            Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis
            santis.Quem num gosta di mim que vai caçá sua turmis!Mauris nec
            dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae
            iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz,
            matis, aguis e fermentis.
          </Text>
          <Text style={styles.text}>
            Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis
            santis.Quem num gosta di mim que vai caçá sua turmis!Mauris nec
            dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae
            iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz,
            matis, aguis e fermentis. Mussum Ipsum, cacilds vidis litro abertis.
            Paisis, filhis, espiritis santis.Quem num gosta di mim que vai caçá
            sua turmis!Mauris nec dolor in eros commodo tempor. Aenean aliquam
            molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite
            divinis, qui tem lupuliz, matis, aguis e fermentis. Mussum Ipsum,
            cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Quem
            num gosta di mim que vai caçá sua turmis!Mauris nec dolor in eros
            commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco
            de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
            fermentis.
          </Text>
          <Text style={styles.text}>
            Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis
            santis.Quem num gosta di mim que vai caçá sua turmis!Mauris nec
            dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae
            iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz,
            matis, aguis e fermentis. Mussum Ipsum, cacilds vidis litro abertis.
            Paisis, filhis, espiritis santis.Quem num gosta di mim que vai caçá
            sua turmis!Mauris nec dolor in eros commodo tempor. Aenean aliquam
            molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite
            divinis, qui tem lupuliz, matis, aguis e fermentis. Mussum Ipsum,
            cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Quem
            num gosta di mim que vai caçá sua turmis!Mauris nec dolor in eros
            commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco
            de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
            fermentis. Mussum Ipsum, cacilds vidis litro abertis. Paisis,
            filhis, espiritis santis.Quem num gosta di mim que vai caçá sua
            turmis!Mauris nec dolor in eros commodo tempor. Aenean aliquam
            molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite
            divinis, qui tem lupuliz, matis, aguis e fermentis. Mussum Ipsum,
            cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Quem
            num gosta di mim que vai caçá sua turmis!Mauris nec dolor in eros
            commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco
            de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
            fermentis. Mussum Ipsum, cacilds vidis litro abertis. Paisis,
            filhis, espiritis santis.Quem num gosta di mim que vai caçá sua
            turmis!Mauris nec dolor in eros commodo tempor. Aenean aliquam
            molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite
            divinis, qui tem lupuliz, matis, aguis e fermentis. Mussum Ipsum,
            cacilds vidis litro abertis. Manduma pindureta quium dia nois
            paga.Mé faiz elementum girarzis, nisi eros vermeio.Nec orci ornare
            consequat. Praesent lacinia ultrices consectetur. Sed non ipsum
            felis.Interagi no mé, cursus quis, vehicula ac nisi. Praesent vel
            viverra nisi. Mauris aliquet nunc non turpis scelerisque,
            eget.Detraxit consequat et quo num tendi nada.Em pé sem cair,
            deitado sem dormir, sentado sem cochilar e fazendo pose.Copo furadis
            é disculpa de bebadis, arcu quam euismod magna. Quem manda na minha
            terra sou euzis!Em pé sem cair, deitado sem dormir, sentado sem
            cochilar e fazendo pose.In elementis mé pra quem é amistosis quis
            leo.Cevadis im ampola pa arma uma pindureta. Sapien in monti
            palavris qui num significa nadis i pareci latim.Posuere libero
            varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet
            nisi.Casamentiss faiz malandris se pirulitá.Viva Forevis aptent
            taciti sociosqu ad litora torquent. Delegadis gente finis, bibendum
            egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis
            nisl.Casamentiss faiz malandris se pirulitá.Mauris nec dolor in eros
            commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
            Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Manduma
            pindureta quium dia nois paga.Si num tem leite então bota uma pinga
            aí cumpadi!Tá deprimidis, eu conheço uma cachacis que pode alegrar
            sua vidis. Leite de capivaris, leite de mula manquis sem
            cabeça.Praesent malesuada urna nisi, quis volutpat erat hendrerit
            non. Nam vulputate dapibus.Si u mundo tá muito paradis? Toma um mé
            que o mundo vai girarzis!Viva Forevis aptent taciti sociosqu ad
            litora torquent. Interagi no mé, cursus quis, vehicula ac nisi.Nec
            orci ornare consequat. Praesent lacinia ultrices consectetur. Sed
            non ipsum felis.Mé faiz elementum girarzis, nisi eros
            vermeio.Praesent vel viverra nisi. Mauris aliquet nunc non turpis
            scelerisque, eget. Mé faiz elementum girarzis, nisi eros
            vermeio.Sapien in monti palavris qui num significa nadis i pareci
            latim.Per aumento de cachacis, eu reclamis.Suco de cevadiss deixa as
            pessoas mais interessantis. Aenean aliquam molestie leo, vitae
            iaculis nisl.Praesent vel viverra nisi. Mauris aliquet nunc non
            turpis scelerisque, eget.Leite de capivaris, leite de mula manquis
            sem cabeça.Quem num gosta di mim que vai caçá sua turmis!
          </Text>
        </View>
      </ScrollView>
      <ProgressBar value={percentage} onMoveTop={handleOnMoveTop} />
    </View>
  );
}
