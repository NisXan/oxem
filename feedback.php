<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (!empty($_POST['name']) && (!empty($_POST['phone']))){
    if (isset($_POST['name'])) {
      if (!empty($_POST['name'])){
        $name = strip_tags($_POST['name']) . "<br>";
        $nameFieldset = "<b>Имя пославшего:</b>";
       }
    }
    if (isset($_POST['phone'])) {
      if (!empty($_POST['phone'])){
        $phone = strip_tags($_POST['phone']) . "<br>";
        $phoneFieldset = "<b>Телефон:</b>";
      }
    }
    if (!empty($_POST['priceAutoParse'])){
      $priceAutoParse = strip_tags($_POST['priceAutoParse']) . "<br>";
      $priceAutoParseFieldset = "<b>Стоимость автомобиля:</b>";
    }
    if (!empty($_POST['firstPaymentParse'])){
      $firstPaymentParse = strip_tags($_POST['firstPaymentParse']) . "<br>";
      $firstPaymentParseFieldset = "<b>Первоначальный взнос:</b>";
    }
    if (!empty($_POST['leaseTermParse'])){
      $leaseTermParse = strip_tags($_POST['leaseTermParse']) . "<br>";
      $leaseTermParseFieldset = "<b>Срок лизинга:</b>";
    }
    if (!empty($_POST['sumLeaseParse'])){
      $sumLeaseParse = strip_tags($_POST['sumLeaseParse']) . "<br>";
      $sumLeaseParseFieldset = "<b>Сумма договора лизинга:</b>";
    }
    if (!empty($_POST['monthlyPaymentParse'])){
      $monthlyPaymentParse = strip_tags($_POST['monthlyPaymentParse']) . "<br>";
      $monthlyPaymentParseFieldset = "<b>Ежемесячный платеж от:</b>";
    }

    $to = "nisxan@mail.ru"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom = "nisxan@mail.ru"; /*Укажите адрес, с которого будет приходить письмо */
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $headers .= "Content-Transfer-Encoding: 8bit \r\n";
    $subject = "Заявка с сайта test.nisxan.ru";
    $message = "$nameFieldset $name<br>
                $phoneFieldset $phone<br>
                $priceAutoParseFieldset $priceAutoParse<br>
                $firstPaymentParseFieldset $firstPaymentParse<br>
                $leaseTermParseFieldset $leaseTermParse<br>
                $sumLeaseParseFieldset $sumLeaseParse<br>
                $monthlyPaymentFieldset $monthlyPayment<br>";

    $send = mail ($to, $subject, $message, $headers);
        if ($send == 'true') {
            echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
        } else {
          echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
        }
  } else {
    echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
  }
} else {
  header ("Location: https://test.nisxan.ru"); // главная страница вашего лендинга
}